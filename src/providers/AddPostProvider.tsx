import React from 'react';


export interface PostType {
  imagePath: string;
  imageUrl?: string; 
  caption: string;
  blobData?: string;
}


interface AddPostContextProps {
  posts: PostType[];
  addPost: () => void;
  clearPost: () => void;
  onTextChange: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, i: number) => void;
  addImage: (imageUrl: string, index: number, blobData:string) => void;
  removePost: (index:number) => void;
  onPostClick: () => void;
  draftId?: string;
  score: number;
  handleScoreChange: (event: Event, newValue: number | number[]) => void
  setDraftId: (draftId: string) => void;
  setFromDraft:(draft: PostType[]) => void;
}

export const AddPostContext = React.createContext({} as AddPostContextProps)
export const useAddPostContext = () => React.useContext(AddPostContext)

interface PostContextProps {
  children: React.ReactNode;
}

export const AddPostProvider: React.FC<PostContextProps> = ({children}) => {
  const [posts, setPosts] = React.useState<PostType[]>([{imageUrl:'', caption:'', imagePath: '', blobData: ''}])
  const [score, setScore] = React.useState<number>(0);

  const [draftId, setId] = React.useState<string | undefined>()
  const setDraftId = (draftId: string) => {
    setId(draftId)
  }
  const clearPost = () => {
    setId(undefined)
    setScore(0)
    setPosts([{imageUrl:'', caption:'', imagePath: '', blobData: ''}])
  }
  // const auth = useAuth();
  // const route = useRouter();
  // const {data} = useGetUserInfo(auth?.user?.uid as string)
  const setFromDraft = (draft:PostType[]) => {
    setPosts(draft)
  }
  const handleScoreChange = (event: Event, newValue: number | number[]) => {
    setScore(newValue as number);
  };
  const onPostClick = async() => {
    return
  //   if(!auth?.user?.uid){
  //     console.log('user needs to be logged in')
  //     return;
  //   }
  //  try {
  //   const res = await  uploadPost({
  //     uid: auth.user.uid, 
  //     posts
  //   }).then(() => {
  //     route.push('/')
  //   })
  //  } catch (e) {
  //   console.log(e)
  //  }
  }
  

  const addPost = () => {
    setPosts((prev) => [...prev, {imageUrl:'', caption: '', blobData: '', imagePath: ''}])
  }
  

  const onTextChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    , i: number) => {
      console.log('e',e.target.value)
    const id = e.target.id
    const value = e.target.value
    const postToUpdate = posts[i]
    const newPost = {...postToUpdate, [id]:value}
    posts[i] = newPost
    let newState = [...posts]
    setPosts(newState)
  }

  const addImage = (imagePath: string, i: number, blobData: string) => {
    const postToUpdate = posts[i]
    const newPost = {...postToUpdate, imagePath, blobData}
    posts[i] = newPost
    const newState = [...posts]
    setPosts(newState)
  } 

  const removePost = (index: number) => {
    let newList = [];
    if(posts.length <= 1){
      return;
    }
    for(let i = 0; i < posts.length; i++){
      if(i === index){
        continue;
      } else {
        newList.push(posts[i])
      }
    }
    setPosts(newList)
  }





  const addPostFunctions = {
    posts,
    draftId, 
    setDraftId,
    addPost,
    onTextChange,
    addImage,
    removePost,
    onPostClick,
    setFromDraft,
    clearPost, 
    score,
    handleScoreChange
  }

  return (
    <AddPostContext.Provider value={addPostFunctions} >
    {children}
    </AddPostContext.Provider>
  )
}


