import { MoreHoriz } from '@mui/icons-material';
import { Avatar, Box, Chip, IconButton, Typography } from '@mui/material';
import React from 'react';
import './PostHeader.scss'
import image from '../../assets/1.jpg'
interface PostHeaderProps {
  total?: number;
  page?: number;
}
export const PostHeader: React.FC<PostHeaderProps> = ({ page, total }) => {
  return (
    <Box className='post-header' position='relative' pl={1} display={'flex'} flexDirection={'row'} width={'100%'} alignItems={'center'} >
      <Box display={'flex'} flexDirection={'row'} alignItems='center'>
        {/* <Avatar src={image} sx={{ mr: 1, height: 30, width: 30 }} />
        <Typography sx={{ color: 'white', fontWeight: '700' }}>
          Max
        </Typography> */}
        {/* <Chip label={<Typography variant='caption' fontWeight={'bold'}>Maxwelldhsu</Typography>} icon={<Avatar src={image} sx={{ mr: 0, height: 25, width: 25 }} />
        } variant="filled" sx={{ ml: 0 }}  /> */}

        {/* <Chip variant="filled" sx={{ ml: 1 }} label={<Typography variant='caption'>Feeling 5/10</Typography>} size='small' /> */}

      </Box>
      <Box ml={'auto'} mr={1}>

        <IconButton>
          <MoreHoriz />
        </IconButton>
        <Chip className='parts-progress' size='small' label={<Typography variant='caption'>{page}/{total}</Typography>} />

      </Box>
    </Box>
  )
}