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


function App() {

  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <AddPostProvider>
          <Layout>
            <Routes>
              <Route path='/home' element={<HomePage />} />
              <Route path='/explore' element={<ExplorePage />} />
              <Route path='/create' element={<CreatePage />} />
              <Route path='/notifications' element={<NotificationsPage />} />

              <Route path='/create/preview' element={<PreviewPage />} />

              <Route path='/Profile' element={<ProfilePage />} />
            </Routes>
          </Layout>
        </AddPostProvider>
      </BrowserRouter>
    </>
  )
}

export default App
