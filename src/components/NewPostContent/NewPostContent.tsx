import React from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import { useDrawerContext } from '../../providers/DrawerProvider';
import { Button, Card, CardContent, Dialog, IconButton, Toolbar, Typography } from '@mui/material';
import { CustomToolbar } from '../CustomToolbar/CustomToolbar';
import { NewPost } from '../NewPost/NewPost';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PreviewPage } from '../../pages/PreviewPage';
import { Preview } from '@mui/icons-material';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { saveDraft } from '../../firebase/posts';
import { useAddPostContext } from '../../providers/AddPostProvider';
import { sampleUid } from '../../configs/sampleData';
import { DraftsPage } from '../../pages/DraftsPage';

export const NewPostContent: React.FC = () => {
  const { onClose } = useDrawerContext();
  const [isOpen, setOpen] = React.useState(false);
  const openModal = () => {
    setOpen(true)
  }
  
  const closeModal = () => {
    setOpen(false)
  }
  const {posts} = useAddPostContext();
  const [page, setPage] = React.useState(0);
  const nav = (page: number) => {
    console.log('setting', page)
    setPage(page)
  }
  const onNext = () => {
    setPage(page+1)
  }
  const onPrev = () => {
    setPage(page-1);
  }
  const onDiscard = () => {
    setOpen(false);
    onClose()
  }
  const pages = [<NewPost goto={nav} onNext={onNext}/>, <PreviewPage onBack={onPrev}/>, <DraftsPage nav={nav}/>]
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', overflow:'scroll' }}>
        <Toolbar sx={{textAlign: 'center'}}>
      <div style={{display: 'flex', flex: '1', }}>{page > 0 && <IconButton onClick={() => nav(0)}><ArrowBackIosNewIcon/></IconButton>}</div>
      <div style={{display: 'flex', flex: '1', justifyContent: 'center'}}>

        <Typography textTransform={'capitalize'}>Create</Typography>
      </div>
        <div style={{display: 'flex', flex: '1', }}>
        <IconButton sx={{ml: 'auto'}} onClick={openModal}>
              {<KeyboardArrowDownIcon/>}
            </IconButton>

        </div>
      </Toolbar>
      <div style={{height: '100%', overflow: 'auto' }}>
        {pages[page]}
      </div>
      <Toolbar/>
      <Dialog open={isOpen} onClose={closeModal}>
        <Card  >
          <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>

            <Typography sx={{ mb: 1 }}>
              If you go back now, this post will be discarded
            </Typography>
            <Button color='error' sx={{ mb: 1 }} variant='outlined' fullWidth onClick={onDiscard}>Discard</Button>
            <Button onClick={() => saveDraft({uid: sampleUid, posts})} sx={{ mb: 1 }} variant='contained' fullWidth>Save Draft</Button>
            <Button onClick={onClose} variant='contained' fullWidth>Cancel</Button>

          </CardContent>
        </Card>
      </Dialog>
    </div>
  )
}