import React from 'react';
import { addReaction, getReactionsByPostId } from '../firebase/reactions';

const ReactionsContext = React.createContext({})

export const useReactionsContext = () => React.useContext(ReactionsContext)
interface ReactionsProviderProps {
  children: React.ReactNode;
  postId: string;
}

export interface Reactions {
  [key:string]: {[key: string]: string}
}

export const ReactionsProvider: React.FC<ReactionsProviderProps> = ({postId, children}) => {
  const [displayedReactions, setDisplayedReactions] = React.useState<Reactions>({})
  React.useEffect(() => {
    getReactionsByPostId({postId}).then((res) => {
      setDisplayedReactions(res)
    })

  }, [])
  const onAdd = async({uid, unified}:{uid: string, unified: string}) => {
    try {
      await addReaction({
        postId: postId || 'E3UBW1nLq4vQzZRgXMqj',
        uid,
        emojiId: unified || 'heart'
      })
      const newState = structuredClone(displayedReactions)
      if(newState[unified]===undefined){
        newState[unified] = {[uid]:uid}
        setDisplayedReactions(newState)
        return
      }
      if(newState[unified][uid]){
        delete newState[unified][uid]
        setDisplayedReactions(newState)
        return
      } else {
        newState[unified][uid] = uid
        setDisplayedReactions(newState)
      }
      

    } catch(e){

    }
  }
  const context = {
   displayedReactions,
    onAdd
  }
  return (
    <ReactionsContext.Provider value={context}>
      {children}
    </ReactionsContext.Provider>
  )
}