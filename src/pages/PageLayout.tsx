import React from 'react';
import './PageLayout.scss'
export const PageLayout: React.FC<{children: React.ReactNode}> = ({children}) => {
 return (
  <div className='page'>
    <div className='body'>
    {children}
    </div>
  </div>
 )
}