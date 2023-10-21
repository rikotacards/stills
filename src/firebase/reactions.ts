import { collection, doc, getDoc, getDocs, onSnapshot, query, runTransaction, setDoc } from "firebase/firestore"
import { db } from "./firebase"

export const addReaction = async({postId, emojiId, uid}: {postId: string, emojiId: string, uid: string}) => {
  // increment count for that like
  // add the user to list of users that liked this
  const docRef = doc(db, "reactions", postId)

  await runTransaction(db, async(transaction) => {
    const reaction = await transaction.get(docRef)
    if(!reaction.exists()){
      transaction.set(docRef, {[emojiId]:{[uid]: uid}})
      return
    }
    // has Emoji been added before?
    if(reaction.data()?.[emojiId]){
      // if emoji has been added, we check if the user is in the list
      if(reaction.data()?.[emojiId]?.[uid]){
        //user exists so we remove
        const userList = {...reaction.data()[emojiId]}
        delete userList[uid];
        transaction.update(docRef, {...reaction.data(), [emojiId]:{...userList}})

      } else {
        // user doesn't exist so we add
        transaction.update(docRef, {...reaction.data(), [emojiId]:{...reaction.data()[emojiId], [uid]:uid}})
      }
    } else {
      transaction.update(docRef, {...reaction.data(), [emojiId]:{[uid]: uid}})
    }
    
  })
}

interface IgetReactionsByPostId {
  postId: string;
}

export interface ReactionsResponse {
  [key:string]: {[key: string]: string}
}

export const getReactionsByPostId = async(args: IgetReactionsByPostId): Promise<ReactionsResponse> => {
  const querySnapshot = await getDoc(doc(db, 'reactions', args.postId))
  return querySnapshot?.data() || {}
}