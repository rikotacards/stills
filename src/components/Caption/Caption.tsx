import React from 'react';
import './Caption.scss';
import { Typography } from '@mui/material';
import classNames from 'classnames';
interface CaptionProps {
  text?: string;
  onClick: () => void;
  expanded: boolean;
}

const generateText = (length: number) => {
  let start = ''
  for(let i = 0; i < length; i++){
    start = start + i + ' random'
  }
  return start
}

export const Caption: React.FC<CaptionProps> = ({text,expanded, onClick}) => {
  
  return (
    <div onClick={onClick} style={{overflow: 'hidden', display: 'flex'}}>
      <Typography className={classNames(expanded ? 'expanded' : 'closed', 'caption')}>
        
      {text || generateText(30)}
      </Typography>
    </div>
  )
}