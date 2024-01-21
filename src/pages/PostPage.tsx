import React from 'react';
import { Post } from '../components/Post/Post';
import './PostPage.scss'
import { useNavigate, useParams } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import { PostResponse, getPostByPostId } from '../firebase/posts';
interface PostPageProps {
  postId?: string;
}
import { AppBar, Button, IconButton, LinearProgress, Toolbar, Typography } from '@mui/material';
import { useGetBreakpoints } from '../utils/useGetBreakpoint';
export const PostPage: React.FC<PostPageProps> = ({ postId: passedInPostId }) => {
  const { postId } = useParams();
  const usedPostId = postId || passedInPostId
  const nav = useNavigate();
  const isNarrow = useGetBreakpoints('md')
  const [isLoading, setLoading] = React.useState(true);
  const [post, setPost] = React.useState<PostResponse | undefined>()
  React.useEffect(() => {
    if (!usedPostId) {
      return;
    }
    const getPost = async () => {
      try {
        const res = await getPostByPostId(usedPostId)
        if (res) {
          setLoading(false);
          setPost(res)
        }
      } catch {
        setLoading(false)
      }
    }
    getPost();
  }, [usedPostId])
  if (isLoading && !post) {
    return <LinearProgress />
  }
  if (!isLoading && !post) {
    return <Typography>Post has been removed</Typography>

  }
  return (
    <div className='post-page'>
      {isNarrow && <><AppBar>
        <Toolbar>
          <IconButton onClick={() => nav(-1)}><ArrowBackIosNewIcon /></IconButton>
          <Typography color='white'>
          </Typography>
        </Toolbar>
      </AppBar>
        <Toolbar /></>}
      <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column', width: '100%' }}>

        <Post {...post} />
      </div>
    </div>
  )
}