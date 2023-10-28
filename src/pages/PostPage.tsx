import React from 'react';
import { Post } from '../components/Post/Post';
import './PostPage.scss'
import { useParams } from 'react-router-dom';
import { PostResponse, getPostByPostId } from '../firebase/posts';
import { Typography } from '@mui/material';
export const PostPage: React.FC = () => {
  const { postId } = useParams();
  console.log('postid', postId)
  const [isLoading, setLoading] = React.useState(true);
  const [post, setPost] = React.useState<PostResponse | undefined>()
  React.useEffect(() => {
    if (!postId) {
      return;
    }
    getPostByPostId(postId).then((res) => {
      console.log('res', res)
      setPost(res)
    }).then(() => setLoading(false))
  }, [postId])
  if(isLoading && !post){
    return <Typography>Loading</Typography>
  }
  if(!isLoading && !post){
    return <Typography>Post has been removed</Typography>

  }
  return (
    <div className='post-page'>
      <Post {...post} />
    </div>
  )
}