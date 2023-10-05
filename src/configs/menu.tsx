import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
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
  }
]