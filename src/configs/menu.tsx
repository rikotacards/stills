import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Avatar, IconButton, styled } from '@mui/material';
import image from '../assets/1.jpg'
import { useDrawerContext } from '../providers/DrawerProvider';
import { CreatePage } from '../pages/CreatePage';

const CreateButton = () => {
  const { onOpen, setRenderComponent } = useDrawerContext();
  const onClick = () => {
    setRenderComponent(CreatePage)
    onOpen();
  }
  return (
    <IconButton onClick={onClick}><AddIcon /></IconButton>
  )
}

const CustomIconButton = (Component: React.FC) => {
  return (
    <IconButton sx={{
      background: 'rgba(0, 0, 0, 0)', 
      backdropFilter: 'blur(50px)',
      border: '1px solid white'
    }}>
      {<Component />}
    </IconButton>
  )
}


export const menu = [
  {
    name: 'home',
    path: '/home',
    icon: CustomIconButton(HomeIcon),
  },
  {
    name: 'explore',
    path: '/explore',
    icon: CustomIconButton(SearchIcon)
  },
  {
    name: 'create',
    path: '/create',
    // icon: <CreateButton/>
    icon: CustomIconButton(AddIcon)
  },
  {
    name: 'notifications',
    path: '/notifications',
    icon: CustomIconButton(FavoriteIcon)

  },
  {

    name: 'Profile',
    path: '/profile',
    icon: <Avatar src={image} sx={{ height: '30px', width: '30px' }} />

  }
]