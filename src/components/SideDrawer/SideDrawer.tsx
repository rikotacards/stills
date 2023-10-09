import { Drawer, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material'
import React from 'react'
import { menu } from '../../configs/menu';
import { useNavigate } from 'react-router-dom';
const drawerWidth = 240;
export const SideDrawer: React.FC = () => {
  const nav = useNavigate();
  const onClick = (to:string) => {
    nav(to)
  }
  const items = menu.map((i) => <ListItem><ListItemButton onClick={() => onClick(i.path)}><ListItemIcon>{i.icon}</ListItemIcon><ListItemText sx={{textTransform: 'capitalize'}} primary={i.name}/></ListItemButton></ListItem>)
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