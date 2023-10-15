import React from 'react';
import { AppBar, Tab, Tabs, Toolbar } from '@mui/material';
import './CreatePage.scss'
import { NewPost } from '../components/NewPost/NewPost';
import { DraftsPage } from './DraftsPage';


export const CreatePage: React.FC = () => {
  const [value, setValue] = React.useState(0)
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const tabPanels = [<NewPost/>, <DraftsPage/>]

  return (
    <div className='create-page'>
      <Tabs onChange={ handleChange} variant='fullWidth'  value={value} sx={{width: '100%'}}>
        <Tab label='New post'/>
        <Tab label='drafts'/>
      </Tabs>
      {tabPanels[value]}
    </div>
  )
}