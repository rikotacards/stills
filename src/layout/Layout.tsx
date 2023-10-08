import React from 'react';
import { Appbar } from '../components/Appbar/Appbar';
import { SideDrawer } from '../components/SideDrawer/SideDrawer';
import { useGetBreakpoints } from '../utils/useGetBreakpoint';
interface LayoutProps {
  children: React.ReactNode
}
export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const isLessThanMd = useGetBreakpoints('md')
  return (
    <div>
      <div style={{ display: 'flex' }}>
        {/* <div style={{ width: isLessThanMd ? 0 : 240 }}></div> */}
        {children}
      </div>
      {isLessThanMd ? <Appbar /> :
        <SideDrawer />}
    </div>
  )
}