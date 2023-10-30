import React from 'react';
import './ProfileHeader.scss';
import { Box, Avatar, Typography, Button, Divider } from '@mui/material';
import { sampleUid } from '../../configs/sampleData';
import { onFollow } from '../../firebase/users';
import { Followers } from '../Followers/Followers';
import { useDrawerContext } from '../../providers/DrawerProvider';
import { Following } from '../Following/Following';
import { LineChart } from '../LineChart/LineChart';
interface ProfileHeaderProps {
  username: string;
  userId: string;
  followersCount: number;
  followingCount: number;
  image: string;
}
export const ProfileHeader: React.FC<ProfileHeaderProps> = ({ username, image, followersCount, followingCount, userId }) => {
  const { onOpen, setRenderComponent } = useDrawerContext();
  const onFollowingClick = () => {
    setRenderComponent(<Following />)
    onOpen();
  }
  return (
    <>
      <Box justifyContent={'flex-start'} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: 1 }}>
        <div style={{ display: 'flex', flexDirection: 'row', width:'100%', overflow: 'scroll' }}>

          <Avatar src={image} sx={{ height: 100, width: 100 }} />
          <div style={{width: '100%'}}>
            <LineChart/>
          </div>

        </div>
        <Typography sx={{ textTransform: 'capitalize' }}>{username}</Typography>
        <Typography>Making things on the web</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          <div>
            <Button sx={{ m: 1, borderRadius: 20, textTransform: 'capitalize' }} onClick={userId ? () => onFollow({ targetUid: userId, myUid: sampleUid }) : undefined} size='small' variant='contained'>Follow</Button>
          </div>
          <div>
            <Button
              onClick={() => { setRenderComponent(<Followers />); onOpen() }}
              sx={{
                m: 1,
                borderRadius: 20,
                textTransform: 'capitalize'
              }}
              size='small'
              variant='contained'>{followersCount} followers
            </Button>
          </div>
          <div>
            <Button
              onClick={onFollowingClick}
              sx={{ m: 1, borderRadius: 20, textTransform: 'capitalize' }} size='small' variant='contained'>{followingCount} Following</Button>
          </div>

        </Box>

      </Box>
      <Divider sx={{ width: '100%' }} />
    </>
  )
}