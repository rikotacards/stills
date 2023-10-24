import React from 'react';
import { AppBar, Button, Card, CardActions, CardContent, Dialog, IconButton, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import './CreatePage.scss'
import CloseIcon from '@mui/icons-material/Close';
import { NewPost } from '../components/NewPost/NewPost';
import { DraftsPage } from './DraftsPage';
import { useNavigate } from 'react-router-dom';
import { useDrawerContext } from '../providers/DrawerProvider';
import { deleteDraftByDraftId, saveDraft } from '../firebase/posts';
import { useAddPostContext } from '../providers/AddPostProvider';
import { sampleUid } from '../configs/sampleData';
import { NewPostContent } from '../components/NewPostContent/NewPostContent';


export const CreatePage: React.FC = () => {
  const [value, setValue] = React.useState(0)
  const [isOpen, setOpen] = React.useState(false);
  const {posts, draftId} = useAddPostContext();
  const onDiscard = () => {
    setOpen(false);
    draftId && deleteDraftByDraftId(draftId)
    nav(-1)
  }
  const openModal = () => {
    setOpen(true)
  }
  const onBack = () => {
    if(isOpen){
      setOpen(false)
    }
    nav(-1)
  }
  const close = () => {
    openModal();
  }

  const nav = useNavigate();
 

  return (
    <div className='create-page'>
      <div className='body'>

      <NewPostContent/>
      </div>
    </div>
  )
}