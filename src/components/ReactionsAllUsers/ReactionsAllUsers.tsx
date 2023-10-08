import React from 'react';
import { CustomToolbar } from '../CustomToolbar/CustomToolbar';
import { useDrawerContext } from '../../providers/DrawerProvider';
import { Tab, Tabs } from '@mui/material';

export const ReactionsAllUsers: React.FC = () => {
  const {onClose} = useDrawerContext();
  return (
    <div>
      <CustomToolbar onClose={onClose} title='all Reactions'/>
      <Tabs fullWidth value='one' onChange={() => {}}>
        <Tab value='one' label="🔥"/>
        <Tab value='one' label="😥"/>
      </Tabs>

    </div>

  )
}