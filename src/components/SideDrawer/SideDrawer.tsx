import { Drawer, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material'
import React from 'react'
import { menu } from '../../configs/menu';
const drawerWidth = 240;
export const SideDrawer: React.FC = () => {
  const items = menu.map((i) => <ListItem><ListItemButton><ListItemIcon>{i.icon}</ListItemIcon><ListItemText primary={i.name}/></ListItemButton></ListItem>)
  return (
    <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar/>
        {items}
      </Drawer>
  )
}