import React from 'react';
import { useDrawerContext } from '../../providers/DrawerProvider';
import { CustomToolbar } from '../CustomToolbar/CustomToolbar';
import { Avatar, Input } from '@mui/material';
import { Comments } from '../Comments/Comments';
interface CommentsContentProps {
  postId: string;
  isModal?: boolean;
}
export const CommentsContent: React.FC<CommentsContentProps> = ({
  isModal
}) => {
  const {onClose} = useDrawerContext();
  return (
    <div>
      <CustomToolbar title='Comments' isModal={isModal} onClose={onClose} />
      <div style={{padding: 8}}>
      <Comments/>
      </div>
      <div style={{display: 'flex', alignItems: 'center', padding: 8}}>
        <Avatar sx={{mr:1, height:'30px', width: '30px'}}/>
        <Input placeholder="Add a comment" disableUnderline />
      </div>
    </div>
  )
}