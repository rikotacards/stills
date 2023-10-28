import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Avatar, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText, styled } from '@mui/material';
import image from '../assets/1.jpg'
import { useDrawerContext } from '../providers/DrawerProvider';
import { NewPostContent } from '../components/NewPostContent/NewPostContent';
import React from 'react';
import { useGetBreakpoints } from '../utils/useGetBreakpoint';
import { useNavigate } from 'react-router-dom';

const CreateButton: React.FC = () => {
  const { onOpen, setRenderComponent } = useDrawerContext();
  const onClick = () => {
    console.log('his')
    setRenderComponent(<NewPostContent/>)
    onOpen();
  }
  return (
    <IconButton sx={{
      background: 'rgba(0, 0, 0, 0.6)', 
      backdropFilter: 'blur(50px)',
      border: '1px solid white'
    }} onClick={onClick}><AddIcon /></IconButton>
  )
}

const CustomIconButton = (Component: React.FC) => {
  return (
    <IconButton sx={{
      background: 'rgba(0, 0, 0, 0.6)', 
      backdropFilter: 'blur(2px)',
      border: '1px solid white'
    }}>
      {<Component />}
    </IconButton>
  )
}




export const MenuItems: React.FC = () => {
   const isLessThanMd = useGetBreakpoints('md')
   const nav = useNavigate();
   const onClick = (to:string) => {
     nav(to)
   }
  const menu = [
    {
      name: 'home',
      path: '/home',
      icon: isLessThanMd ? CustomIconButton(HomeIcon) : <HomeIcon/>,
    },
    {
      name: 'explore',
      path: '/explore',
      icon: isLessThanMd ? CustomIconButton(SearchIcon) : <SearchIcon/>
    },
    {
      name: 'create',
      path: isLessThanMd ? '#' : '/create',
      // icon: <CreateButton/>
      icon: isLessThanMd ? <CreateButton/> : <AddIcon/>
    },
    {
      name: 'notifications',
      path: '/notifications',
      icon: isLessThanMd ?CustomIconButton(FavoriteIcon) : <FavoriteIcon/>
  
    },
    {
  
      name: 'Profile',
      path: '/max',
      icon: <Avatar src={image} sx={{ height: '30px', width: '30px' }} />
  
    }
  ]

  const items = menu.map((i) =>  isLessThanMd ? <div key={i.path} onClick={() =>onClick(i.path)}>{i.icon}</div> : <ListItem key={i.name}><ListItemButton onClick={() => onClick(i.path)}><ListItemIcon>{i.icon}</ListItemIcon><ListItemText sx={{textTransform: 'capitalize'}} primary={i.name}/></ListItemButton></ListItem>)
  return (
    <>
    {items}
    </>
  )
}

