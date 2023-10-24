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
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const tabPanels = [<NewPost />, <DraftsPage />]

  return (
    <div className='create-page'>
      <AppBar sx={{position: 'relative', }}>
        <Toolbar sx={{ width: '100%', textAlign: 'center' }}>
          <div style={{ position: 'absolute' }} >

          <IconButton  onClick={close}>
            <CloseIcon />
          </IconButton>
          </div>
          <div style={{justifyContent: 'center',  display: 'flex', flex: 1 }}>

            <Typography>Create</Typography>
          </div>
        </Toolbar>

      </AppBar>

      <Tabs onChange={handleChange} variant='fullWidth' value={value} sx={{ width: '100%' }}>
        <Tab sx={{ textTransform: 'capitalize' }} label='New post' />
        <Tab sx={{ textTransform: 'capitalize' }} label='drafts' />
      </Tabs>
      {tabPanels[value]}
      <Dialog open={isOpen} onClose={openModal}>
        <Card  >
          <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>

            <Typography sx={{ mb: 1 }}>
              If you go back now, this post will be discarded.
            </Typography>
            <Button color='error' sx={{ mb: 1 }} variant='outlined' fullWidth onClick={onDiscard}>Discard</Button>
            <Button onClick={() => saveDraft({uid: sampleUid, posts})} sx={{ mb: 1 }} variant='contained' fullWidth>Save Draft</Button>
            <Button onClick={onBack} variant='contained' fullWidth>Cancel</Button>

          </CardContent>
        </Card>
      </Dialog>
    </div>
  )
}