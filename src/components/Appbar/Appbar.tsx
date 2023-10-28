import { AppBar, Toolbar } from '@mui/material';
import React from 'react';
import { MenuItems } from '../../configs/menu';
import './Appbar.scss'
import { useLocation } from 'react-router-dom';
export const Appbar: React.FC = () => {
  const {pathname} = useLocation();
  if(pathname === '/create' || 
  pathname === '/create/preview'
  ){
    return null
  }
  return (
    <>
    <AppBar elevation={0} position="fixed" color="primary" sx={{background:'transparent', top: 'auto', bottom: 0 }}>
      {/* <Divider/> */}
      <Toolbar className='toolbar'>
           <MenuItems/>
      </Toolbar>
      <div style={{height:25}}/>
    </AppBar>
    </>
  )
}