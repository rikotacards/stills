import { AppBar, Divider, IconButton, Toolbar } from '@mui/material';
import React from 'react';
import { menu } from '../../configs/menu';
import './Appbar.scss'
import { useLocation, useNavigate, useRoutes } from 'react-router-dom';
export const Appbar: React.FC = () => {
  const nav = useNavigate();
  const {pathname} = useLocation();
  const menuItems = menu.map((i) => <IconButton onClick={() => nav(i.path)}>{i.icon}</IconButton>)
  if(pathname === '/create' || 
  pathname === '/create/preview'
  ){
    return null
  }
  return (
    <>
    <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
      <Divider/>
      <Toolbar className='toolbar'>
           {menuItems}
      </Toolbar>
      {/* <div style={{height:25}}/> */}
    </AppBar>
    </>
  )
}