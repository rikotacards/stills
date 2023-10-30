import React from 'react';
import { addReaction, getReactionsByPostId } from '../firebase/reactions';

interface IReactionsContext {
  onAdd: ({ uid, unified }: {
    uid: string;
    unified: string;
}) => Promise<void>,
displayedReactions: Reactions
}

const ReactionsContext = React.createContext({} as IReactionsContext)

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
      if(res['2764-fe0f']){

      } else {
        res['2764-fe0f'] = {}
      }
      setDisplayedReactions(res)
    })

  }, [])
  const onAdd = async({uid, unified}:{uid: string, unified: string}) => {
    try {
      addReaction({
        postId: postId || 'E3UBW1nLq4vQzZRgXMqj',
        uid,
        emojiId: unified 
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