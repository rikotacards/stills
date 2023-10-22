import React from 'react';


export interface PostType {
  imagePath: string;
  imageUrl: string; 
  caption: string;
  blobData?: string;
}


interface AddPostContextProps {
  posts: PostType[];
  addPost: () => void;
  onTextChange: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, i: number) => void;
  addImage: (imageUrl: string, index: number, blobData:string) => void;
  removePost: (index:number) => void;
  onPostClick: () => void;
  setFromDraft:(draft:[{imageUrl:string, caption:string, blobData: string, imagePath: string}]) => void;
}

export const AddPostContext = React.createContext({} as AddPostContextProps)
export const useAddPostContext = () => React.useContext(AddPostContext)

interface PostContextProps {
  children: React.ReactNode;
}

export const AddPostProvider: React.FC<PostContextProps> = ({children}) => {
  const [posts, setPosts] = React.useState([{imageUrl:'', caption:'', imagePath: ''}])
  // const auth = useAuth();
  // const route = useRouter();
  // const {data} = useGetUserInfo(auth?.user?.uid as string)
  const setFromDraft = (draft:[{imageUrl:string, caption:string, blobData: string, imagePath: string}]) => {
    setPosts(draft)
  }
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
    addPost,
    onTextChange,
    addImage,
    removePost,
    onPostClick,
    setFromDraft
  }

  return (
    <AddPostContext.Provider value={addPostFunctions} >
    {children}
    </AddPostContext.Provider>
  )
}


