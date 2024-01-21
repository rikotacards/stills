import React from 'react';
import './PreviewPage.scss'
import { Post } from '../components/Post/Post';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
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
  const {posts, draftId, clearPost, score} = useAddPostContext();
  const postsWithImage = posts.filter((p) => p.imagePath)
  const {onClose} = useDrawerContext();
  const [isPosting, setPosting] = React.useState(false);
  const isLessThanMd = useGetBreakpoints('md')
  const onPost = async() => {
    try {
      setPosting(true)
      onClose()
      await addPost(
         {
           uid: sampleUid,
           posts: postsWithImage, 
           draftId,
           score: score || 0
         }
       )
       nav('/')
       clearPost()
      draftId &&  deleteDraftByDraftId(draftId)
    } catch {
      setPosting(false)
    } finally {
      setPosting(false)
    }
    
  }
  const back = onBack ? onBack : () => nav(-1)
  return (
    <div className='preview-page'>
      <AppBar>
        <Toolbar>
          <div style={{ width: isLessThanMd ? 0 : 240 }}></div>
          <IconButton onClick={back}><ArrowBackIosNewIcon /></IconButton>
          <Typography color='white'>
            </Typography>
          <div style={{ marginLeft: 'auto' }}>
            <Button size='small' onClick={onPost} variant='contained'><Typography sx={{textTransform: 'capitalize'}}>{isPosting ? 'Posting' : 'Post'}</Typography></Button>
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar/>

      {posts.length ? <Post score={score} postTime={new Date()} content={postsWithImage} postId={''}/> : <Typography>Nothing to preview</Typography>}

    </div>
  )
}