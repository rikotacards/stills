import React from 'react';
import './Caption.scss';
import image from '../../assets/1.jpg'
import { Avatar, Chip, Typography } from '@mui/material';
import classNames from 'classnames';
interface CaptionProps {
  text?: string;
}


export const Caption: React.FC<CaptionProps> = ({ text }) => {
  const [expanded, setOn] = React.useState(false);
  const onClick = () => {
    setOn(!expanded);
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
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 4 }}>
            <Avatar src={image} sx={{ marginLeft: 1, height: 25, width: 25 }} />

            <div style={{alignItems: 'center', marginLeft: 8, display: 'flex', flexDirection: 'row' }}>
              <Typography variant='caption' fontWeight={'bold'}>Maxwelldhsu</Typography> 
              {/* <div style={{marginLeft: 'auto'}}>
              <Chip variant="filled" sx={{ ml: 0.5 }} label={<Typography variant='caption'>Feeling 4/10</Typography>} size='small' />
                </div>          */}

            </div>

          </div>
          <Typography sx={{fontWeight:'500', textShadow: 'black 0px 0px 0px' }} variant='body2' className={classNames(expanded ? 'expanded' : 'closed', 'caption')}>
            {text}
          </Typography>
        </div>
      </div>
    </div>
  )
}