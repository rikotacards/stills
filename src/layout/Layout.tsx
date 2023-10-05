import React from 'react';
import { Appbar } from '../components/Appbar/Appbar';
import { SideDrawer } from '../components/SideDrawer/SideDrawer';
import { useGetBreakpoints } from '../utils/useGetBreakpoint';
interface LayoutProps {
  children: React.ReactNode
}
export const Layout: React.FC<LayoutProps> = ({children}) => {
  const isLessThanMd = useGetBreakpoints('md')
  return (
    <div>
      {children}

      {isLessThanMd ? <Appbar/> :
      <SideDrawer/>}
    </div>
  )
}