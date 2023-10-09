import React from 'react';
import { Appbar } from '../components/Appbar/Appbar';
import { SideDrawer } from '../components/SideDrawer/SideDrawer';
import { useGetBreakpoints } from '../utils/useGetBreakpoint';
import { Toolbar } from '@mui/material';
interface LayoutProps {
  children: React.ReactNode
}
export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const isLessThanMd = useGetBreakpoints('md')
  return (
    <div style={{
      display: 'flex',
      flexDirection:'column',
      alignItems: 'center',
      width: '100%',
    }}>
      <div style={{ display: 'flex' }}>
        {children}
      </div>
      {isLessThanMd ? <><Appbar /></> :
        <SideDrawer />}
        <Toolbar/>
    </div>
  )
}