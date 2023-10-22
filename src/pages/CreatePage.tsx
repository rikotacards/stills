import React from 'react';
import { AppBar, Button, Card, CardActions, CardContent, Dialog, IconButton, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import './CreatePage.scss'
import CloseIcon from '@mui/icons-material/Close';
import { NewPost } from '../components/NewPost/NewPost';
import { DraftsPage } from './DraftsPage';
import { useNavigate } from 'react-router-dom';
import { useDrawerContext } from '../providers/DrawerProvider';


export const CreatePage: React.FC = () => {
  const [value, setValue] = React.useState(0)
  const [isOpen, setOpen] = React.useState(false);
  const {onClose} = useDrawerContext();
  const closeModal = () => {
    setOpen(false)
  }
  const onBack = () => {
    console.log('onback')
    nav(-1)
  }

  const nav = useNavigate();
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const tabPanels = [<NewPost />, <DraftsPage />]

  return (
    <div className='create-page'>
      <AppBar>
        <Toolbar sx={{ width: '100%', textAlign: 'center' }}>
          <IconButton onClick={onBack}>
            <CloseIcon />
          </IconButton>
          <Typography>Create</Typography>
        </Toolbar>

      </AppBar>
      
      <Toolbar />
      <Tabs onChange={handleChange} variant='fullWidth' value={value} sx={{ width: '100%' }}>
            <Tab sx={{ textTransform: 'capitalize' }} label='New post' />
            <Tab sx={{ textTransform: 'capitalize' }} label='drafts' />
          </Tabs>
      {tabPanels[value]}
      <Dialog open={isOpen} onClose={closeModal}>
        <Card  >
          <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>

            <Typography sx={{ mb: 1 }}>
              If you go back now, this post will be discarded
            </Typography>
            <Button color='error' sx={{ mb: 1 }} variant='outlined' fullWidth onClick={onBack}>Discard</Button>
            <Button sx={{ mb: 1 }} variant='contained' fullWidth>Save Draft</Button>
            <Button onClick={onBack} variant='contained' fullWidth>Go Back</Button>

          </CardContent>
        </Card>
      </Dialog>
    </div>
  )
}