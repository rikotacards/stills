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
import theme from './configs/theme';


function App() {

  return (
    <ThemeProvider theme={theme}>

    <BrowserRouter>
          <Layout>
        <AddPostProvider>
            <Routes>
              <Route path='/home' element={<HomePage />} />
              <Route path='/explore' element={<ExplorePage />} />
              <Route path='/create' element={<CreatePage />} />
              <Route path='/notifications' element={<NotificationsPage />} />
              <Route path='/create/preview' element={<PreviewPage />} />
              <Route path='/post/:postId' element={<PostPage />} />
              <Route path='/profile' element={<ProfilePage />} />
              <Route path='/:username' element={<ProfilePage />} />
            </Routes>
        </AddPostProvider>
          </Layout>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
