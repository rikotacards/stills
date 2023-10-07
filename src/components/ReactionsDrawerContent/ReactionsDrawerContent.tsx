import { IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useDrawerContext } from '../../providers/DrawerProvider';
interface ReactionsDrawerContentProps {
  postId: string;
  isModal?: boolean;
}
export const ReactionsDrawerContent: React.FC<ReactionsDrawerContentProps> = (props) => {
  const {onClose} = useDrawerContext();
const postId = props?.postId
  return (
    <div>
      <Toolbar>
        <Typography>Add Reactions</Typography>
        <IconButton onClick={onClose}>
              <KeyboardArrowDownIcon/>
            </IconButton>
      </Toolbar>
      <div>
        {postId}
      </div>
    </div>
  )
}