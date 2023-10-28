import CssBaseline from '@mui/material/CssBaseline';

import './App.css'
import { Layout } from './layout/Layout';
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { HomePage } from './pages/HomePage';
import { ExplorePage } from './pages/ExplorePage';
import { CreatePage } from './pages/CreatePage';
import { ProfilePage } from './pages/ProfilePage';
import { AddPostProvider } from './providers/AddPostProvider';
import { PreviewPage } from './pages/PreviewPage';
import { NotificationsPage } from './pages/NotificationsPage';
import { PostPage } from './pages/PostPage';
import { ThemeProvider } from '@emotion/react';
import {darkTheme} from './configs/theme';
import { DrawerProvider } from './providers/DrawerProvider';


function App() {

  return (
    <ThemeProvider theme={darkTheme}>

      <BrowserRouter>
        <AddPostProvider>
          <DrawerProvider>
            <Layout>
              <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/explore' element={<ExplorePage />} />
                <Route path='/create' element={<CreatePage />} />
                <Route path='/notifications' element={<NotificationsPage />} />
                <Route path='/create/preview' element={<PreviewPage />} />
                <Route path='/p/:postId' element={<PostPage />} />
                <Route path='/profile' element={<ProfilePage />} />
                <Route path='/:username' element={<ProfilePage />} />
              </Routes>
            </Layout>
          </DrawerProvider>
    </AddPostProvider>
      </BrowserRouter>
    </ThemeProvider >
  )
}

export default App
