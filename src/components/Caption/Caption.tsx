import React from 'react';
import './Caption.scss';
import image from '../../assets/1.jpg'
import { Avatar, Chip, Typography } from '@mui/material';
import classNames from 'classnames';
import { PostHeader } from '../PostHeader/PostHeader';
interface CaptionProps {
  text?: string;
}


export const Caption: React.FC<CaptionProps> = ({ text }) => {
  const [expanded, setOn] = React.useState(false);
  const onClick = () => {
    setOn(!expanded);
  }
  if (text?.length === 0) {
    return null
  }
  return (
    <div>


      <div onClick={onClick} style={{
        display: 'flex',
        flexDirection: 'row',
        maxHeight: '150px',
        alignItems: 'center',
        justifyContent: 'flex-start'
      }}>


        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '0px' }}>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom:4 }}>
          <Avatar src={image} sx={{marginLeft:1, height: 25, width: 25 }} />

            <div style={{ marginLeft: 8, display: 'flex', flexDirection: 'row' }}>
              <Typography variant='caption' fontWeight={'bold'}>Maxwelldhsu</Typography>
            </div>

          </div>
          <Typography sx={{ textShadow: 'grey 0px 0px 3px' }} variant='body2' className={classNames(expanded ? 'expanded' : 'closed', 'caption')}>
            {text}
          </Typography>
        </div>
      </div>
    </div>
  )
}