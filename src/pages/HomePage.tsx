import {  Toolbar } from '@mui/material';
import React from 'react';
import { Feed } from '../components/Feed/Feed';
import './HomePage.scss'
export const HomePage: React.FC = () => {
  const agent = navigator.userAgent
  return (
    <div className='home'>
      {agent}
      <Feed/>
              <Toolbar/>

    </div>
  )
}