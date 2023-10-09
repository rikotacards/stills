import React from 'react';
import { Appbar } from '../components/Appbar/Appbar';
import { SideDrawer } from '../components/SideDrawer/SideDrawer';
import { useGetBreakpoints } from '../utils/useGetBreakpoint';
import { AppBar, Box, CssBaseline, Toolbar, Typography } from '@mui/material';
import { drawerWidth } from '../configs/dimensions';
interface LayoutProps {
  children: React.ReactNode
}
export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const isLessThanMd = useGetBreakpoints('md')
  return (
    <Box sx={{
      display: 'flex',
    }}>
      <CssBaseline />

      {!isLessThanMd && <SideDrawer />}
      <Box component='main'
        sx={{
          flexGrow: 1,
        }}>
        {children}
      </Box>
      {isLessThanMd ? <Appbar /> :
        <>
        </>}
      {/* <Toolbar/> */}
    </Box>
  )
}