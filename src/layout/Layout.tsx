import React from 'react';
import { Appbar } from '../components/Appbar/Appbar';
import { SideDrawer } from '../components/SideDrawer/SideDrawer';
import { useGetBreakpoints } from '../utils/useGetBreakpoint';
import {  Box, CssBaseline } from '@mui/material';
interface LayoutProps {
  children: React.ReactNode
}
export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const isLessThanMd = useGetBreakpoints('md')
  return (
    <Box sx={{
      display: 'flex',
      overflow: 'hidden'
    }}>
      <CssBaseline />

      {!isLessThanMd && <SideDrawer />}
      <Box component='main'
        sx={{
          flexGrow: 1,
          width: '100%'
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