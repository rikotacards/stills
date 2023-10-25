import React from 'react';
import './PreviewPage.scss'
import { Post } from '../components/Post/Post';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';
import { useGetBreakpoints } from '../utils/useGetBreakpoint';
import { useAddPostContext } from '../providers/AddPostProvider';
import { addPost, deleteDraftByDraftId } from '../firebase/posts';
import { sampleUid } from '../configs/sampleData';
import { useDrawerContext } from '../providers/DrawerProvider';
interface PreviewPageProps {
  onBack?: () => void;
}
export const PreviewPage: React.FC<PreviewPageProps> = ({onBack}) => {
  const nav = useNavigate();
  const {posts, draftId, clearPost} = useAddPostContext();
  const {onClose} = useDrawerContext();
  const isLessThanMd = useGetBreakpoints('md')
  const onPost = async() => {
    onClose()
   await addPost(
      {
        uid: sampleUid,
        posts, 
        draftId
      }
    )
    nav('/home')
    clearPost()
   draftId &&  deleteDraftByDraftId(draftId)
  }
  const back = onBack ? onBack : () => nav(-1)
  return (
    <div className='preview-page'>
      <AppBar>
        <Toolbar>
          <div style={{ width: isLessThanMd ? 0 : 240 }}></div>
          <IconButton onClick={back}><ArrowBackIosIcon /></IconButton>
          <Typography color='white'>
            Back</Typography>
          <div style={{ marginLeft: 'auto' }}>
            <Button onClick={onPost} variant='outlined'><Typography sx={{textTransform: 'capitalize'}}color='white'>Post </Typography></Button>
          </div>
        </Toolbar>

      </AppBar>
      <Toolbar />

      {posts.length ? <Post postTime={new Date()} content={posts} postId={''}/> : <Typography>Nothing to preview</Typography>}

    </div>
  )
}