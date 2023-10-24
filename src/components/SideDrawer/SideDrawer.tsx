import { Drawer, Toolbar } from '@mui/material'
import React from 'react'
import { MenuItems } from '../../configs/menu';
export const drawerWidth = 240;
export const SideDrawer: React.FC = () => {
 
  return (
    <Drawer
        variant="permanent"
        anchor='left'
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar/>
        <MenuItems/>
      </Drawer>
  )
}