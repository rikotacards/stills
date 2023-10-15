import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Avatar } from '@mui/material';
import image from '../assets/1.jpg'
export const menu = [
  {
    name: 'home',
    path: '/home',
    icon: <HomeIcon/>,
  },
  {
    name: 'explore',
    path: '/explore',
    icon: <SearchIcon/>
  },
  {
    name: 'create',
    path: '/create',
    icon: <AddIcon/>
  },
  {
    name: 'notifications',
    path: '/notifications',
    icon:<FavoriteIcon/>

  },
  {
    
      name: 'Profile',
      path: '/profile',
      icon: <Avatar src={image} sx={{height: '30px', width:'30px'}}/>
    
  }
]