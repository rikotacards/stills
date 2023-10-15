import React from 'react';
import './Caption.scss';
import { Avatar, Typography } from '@mui/material';
import classNames from 'classnames';
interface CaptionProps {
  text?: string;
}

const generateText = (length: number) => {
  let start = ''
  for (let i = 0; i < length; i++) {
    start = start + i + ' random'
  }
  return start
}

export const Caption: React.FC<CaptionProps> = ({ text }) => {
  const [expanded, setOn] = React.useState(false);
  const onClick = () => {
    setOn(!expanded);
  }
  return (
    <div onClick={onClick} style={{
      display: 'flex', 
      flexDirection: 'column',
      maxHeight: '150px',
      justifyContent: 'flex-end'
    }}>
      <Typography fontWeight={500} className={classNames(expanded ? 'expanded' : 'closed', 'caption')}>
        {text || generateText(300)}
      </Typography>
    </div>
  )
}