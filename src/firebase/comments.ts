// everything to do with comments

import { FieldValue, collection, addDoc,orderBy , deleteDoc, doc, getDocs, query, serverTimestamp, setDoc, where, getDoc } from "firebase/firestore"
import { db, storage } from "./firebase"

export interface IComment {
  authorUid: string, 
  text: string; 
  postTime: string
}

export const addComment = async ({uid, text, postId}: {postId: string, uid: string, text: string}) => {
   addDoc(collection(db, 'content', postId, 'comments'), {
    authorUid: uid,
    text, 
    postTime: serverTimestamp()
  })
  return {authorUid: uid, text, postTime: serverTimestamp.toDate()}
}
export const deleteComment = async ({postId, commentId}: {commentId:string, postId: string, uid: string, text: string}) => {
  await deleteDoc(doc(db, 'content', postId, 'comments', commentId))
}

export const getCommentsByPostId = async(postId: string) => {
  const contentRef = collection(db, 'content', postId, 'comments')
  const q = query(contentRef, orderBy("postTime", "desc"))
  const res = [] as IComment[]
  
  try {
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log( doc.data());
      res.push(doc.data() as IComment)
    });
    return res
  }catch(e){
    console.log(e)
  }
}