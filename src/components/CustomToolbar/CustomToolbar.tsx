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
    <Toolbar sx={{textAlign: 'center'}}>
      <div style={{display: 'flex', flex: '1', }}/>
      <div style={{display: 'flex', flex: '1', justifyContent: 'center'}}>

        <Typography textTransform={'capitalize'}>{title}</Typography>
      </div>
        <div style={{display: 'flex', flex: '1', }}>
        <IconButton sx={{ml: 'auto'}} onClick={onClose}>
              {isModal ? <CloseIcon/> : <KeyboardArrowDownIcon/>}
            </IconButton>

        </div>
      </Toolbar>
  )
}