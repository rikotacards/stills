import { AppBar, IconButton, Toolbar } from '@mui/material';
import React from 'react';
import { menu } from '../../configs/menu';

export const Appbar: React.FC = () => {
  const menuItems = menu.map((i) => <IconButton>{i.icon}</IconButton>)
  return (
    <>
    <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
      <Toolbar>
           {menuItems}
      </Toolbar>
    </AppBar>
    </>
  )
}