import { collection, doc, getDoc, getDocs, setDoc, serverTimestamp } from "firebase/firestore"
import { db } from "./firebase"

// adding target user to your list of following
const addFollowing = async ({myUid, targetUid}:{myUid: string, targetUid: string}) => {
  const docRef = doc(db,"users", myUid, "following", targetUid)
  await setDoc(docRef, {followDate: serverTimestamp()}, {merge: true})
}

const addFollower = async ({myUid, targetUid}:{myUid: string, targetUid: string}) => {
  const docRef = doc(db,"users", targetUid, "followers", myUid)
  await setDoc(docRef, {followDate: serverTimestamp()}, {merge: true})
}

export const onFollow = async ({myUid, targetUid}:{myUid: string, targetUid: string}) => {
  try {
    await addFollowing({myUid, targetUid})
    await addFollower({myUid, targetUid})
  } catch(e){
    return e
  }
}

export const getFollowingCount = async(uid: string) => {
  const snapshot = await getDocs(collection(db,"users", uid, 'following'))
  return snapshot.size
}
export const getFollowerCount = async(uid: string) => {
  const snapshot = await getDocs(collection(db,"users", uid, 'follower'))
  return snapshot.size
}
export const getFollowers = async(uid: string) => {
  const snapshot = await getDocs(collection(db,"users", uid, 'follower'))
  const res: string[] = [];
  snapshot.docs.forEach((doc) => {
    res.push(doc.id)
  })
  return res
}
export const getFollowing = async(uid: string) => {
  const snapshot = await getDocs(collection(db,"users", uid, 'following'))
  const res: string[] = [];
  snapshot.docs.forEach((doc) => {
    res.push(doc.id)
  })
  return res
}


export const getUidFromUsername = async(username: string) => {
  const snapshot = await getDoc(doc(db,'usernames', username));
  return snapshot.exists() ? snapshot.data()?.uid : undefined
}

