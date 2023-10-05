import CssBaseline from '@mui/material/CssBaseline';

import './App.css'
import { Layout } from './layout/Layout';
import { Post } from './components/Post/Post';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { HomePage } from './pages/HomePage';
import { ExplorePage } from './pages/ExplorePage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: '/explore',
    element: <ExplorePage/>
  }
]);

function App() {

  return (
    <>
    <CssBaseline/>
    <Layout>
    <RouterProvider router={router} />

      </Layout>
    </>
  )
}

export default App
