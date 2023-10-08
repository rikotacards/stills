import { Toolbar, Typography, IconButton } from '@mui/material';
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
interface CustomToolbarProps {
  title: string;
  onClose: () => void;
  isModal?: boolean;
}
export const CustomToolbar: React.FC<CustomToolbarProps> = ({
  onClose, isModal, title
}) => {
  return (
    <Toolbar>
        <Typography>{title}</Typography>
        <IconButton sx={{ml: 'auto'}} onClick={onClose}>
              {isModal ? <CloseIcon/> : <KeyboardArrowDownIcon/>}
            </IconButton>
      </Toolbar>
  )
}