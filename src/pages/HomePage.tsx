import { Box, Toolbar } from '@mui/material';
import React from 'react';
import { Feed } from '../components/Feed/Feed';
import './HomePage.scss'
export const HomePage: React.FC = () => {
  return (
    <div className='home'>
      <Feed/>
              <Toolbar/>

    </div>
  )
}