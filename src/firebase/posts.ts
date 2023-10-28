// everything to do with posts

import { FieldValue, collection, deleteDoc, doc, getDocs, query, serverTimestamp, setDoc, where, getDoc } from "firebase/firestore"
import { db, storage } from "./firebase"
import { ref, uploadString, getDownloadURL } from "firebase/storage";


interface AddPostsProps {
  uid: string;
  posts: any[]
  draftId?: string;
}

export interface Content {
  caption: string;
  imagePath: string;
  imageUrl?:string;
}


export const addPost = async(args:AddPostsProps) => {
  const { uid, posts, draftId } = args;

  const collectionRef = collection(db, "content");
  const docRef = doc(collectionRef);
  const content = [] as Content[]
  try {
    posts.forEach(async (post, i) => {
      // 1) we save images into a directory that references the post
      const storageRef = ref(storage, `${uid}/${draftId || docRef.id}/${i}.jpg`);
      if (!draftId && !post?.blobData?.length) {
        // NO PHOTOS
        // However, there would be no case of this
        return

      }
      // we update existing draft, and not create a new one
      if(draftId){
        content.push({
          caption: post.caption,
          imagePath: post.imagePath
        })
        await setDoc(doc(collection(db, "content"), draftId), {
          postTime: serverTimestamp(),
          author: uid,
          content: content,
          postId: draftId,
        });
        return;
      }

     !draftId &&  await uploadString(storageRef, post.blobData, "data_url")
        .then(async(snapshot) => {
          posts[i]["imagePath"] = snapshot.ref.fullPath;
          // create the content without large blob data
          const downloadUrl = await getDownloadURL(storageRef)
          content.push({
            caption: post.caption,
            imagePath: downloadUrl,
          });
        })
        .then(async () => {
          // These 'then' are linked up because we need the content to upload array
          // if we didn't use the then, then the array would be empty.
          await setDoc(doc(collection(db, "content"), docRef.id), {
            postTime: serverTimestamp(),
            author: uid,
            content: content,
            postId:  docRef.id,
          });
        });
    });

  } catch (e) {
    return e;
  }
}
export const saveDraft = async(args:AddPostsProps & {draftId?: string}) => {
  const { uid, posts, draftId } = args;
    console.log('save draft hit')
  const collectionRef = collection(db, "drafts");
  const docRef = doc(collectionRef);
  const content = [] as Content[]
  try {
    posts.forEach(async (post, i) => {
      // 1) we save images into a directory that references the post
      const storageRef = ref(storage, `${uid}/${draftId || docRef.id}/${i}.jpg`);
      if (!draftId && !post?.blobData?.length) {
        // NO PHOTOS
        // However, there would be no case of this
        return

      }
      // we update existing draft, and not create a new one
      if(draftId){
        content.push({
          caption: post.caption,
          imagePath: post.imagePath
        })
        await setDoc(doc(collection(db, "drafts"), draftId), {
          postTime: serverTimestamp(),
          author: uid,
          content: content,
          postId: draftId,
        });
        return;
      }

     !draftId &&  await uploadString(storageRef, post.blobData, "data_url")
        .then(async(snapshot) => {
          posts[i]["imagePath"] = snapshot.ref.fullPath;
          // create the content without large blob data
          const downloadUrl = await getDownloadURL(storageRef)
          content.push({
            caption: post.caption,
            imagePath: downloadUrl,
          });
        })
        .then(async () => {
          // These 'then' are linked up because we need the content to upload array
          // if we didn't use the then, then the array would be empty.
          await setDoc(doc(collection(db, "drafts"), docRef.id), {
            postTime: serverTimestamp(),
            author: uid,
            content: content,
            postId:  docRef.id,
          });
        });
    });

  } catch (e) {
    return e;
  }
}

export interface PostResponse {
  postTime: FieldValue;
  author: string;
  content: Content[];
  postId: string;
}

export const getPostsByUid = async (uid: string) => {
  const contentRef = collection(db, 'content')
  const q = query(contentRef, where("author", "==", uid))
  const querySnapshot = await getDocs(q);
  const res = [] as PostResponse[];
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  res.push({...doc.data(), postTime: doc.data().postTime.toDate()} as PostResponse)
});
return res
}
export const getPostByPostId = async (postId: string) => {
  console.log("getting")
  const snapshot = await getDoc(doc(db, 'content', postId))
  if(snapshot.exists()){
    console.log('data', snapshot.data)
    return {...snapshot.data(), postTime: snapshot.data().postTime.toDate()} as PostResponse;
  }
}


export const getDraftsByUid = async (uid: string) => {
  const contentRef = collection(db, 'drafts')
  const q = query(contentRef, where("author", "==", uid))
  const querySnapshot = await getDocs(q);
  const res = [] as PostResponse[];
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log( doc.data());
  res.push(doc.data() as PostResponse)
});
return res
}

export const  deleteDraftByDraftId = async (draftId: string) => {
  await deleteDoc(doc(collection(db, 'drafts'), draftId))
}