// everything to do with posts

import { FieldValue, collection, doc, getDocs, query, serverTimestamp, setDoc, where } from "firebase/firestore"
import { db, storage } from "./firebase"
import { ref, uploadString, getDownloadURL } from "firebase/storage";


interface AddPostsProps {
  uid: string;
  posts: any[]
}

export interface Content {
  caption: string;
  imagePath: string;
  imageUrl?:string;
}


export const addPost = async(args:AddPostsProps) => {
  const { uid, posts } = args;

  const collectionRef = collection(db, "content");
  const docRef = doc(collectionRef);
  const content = [] as Content[]
  try {
    posts.forEach(async (post, i) => {
      // 1) we save images into a directory that references the post
      const storageRef = ref(storage, `${uid}/${docRef.id}/${i}.jpg`);
      if (!post?.blobData?.length) {
        // NO PHOTOS
        // However, there would be no case of this
        return

      }

      await uploadString(storageRef, post.blobData, "data_url")
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
            postId: docRef.id,
          });
        });
    });

    // Init Reactions doc in firestore,
    await setDoc(doc(db, "reactions", docRef.id), {
      "2764-fe0f": { count: 0, hasLiked: false, emoji: "❤️" },
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
  console.log( doc.data());
  res.push(doc.data() as PostResponse)
});
return res
}