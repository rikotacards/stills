import React from 'react';
import image from '../assets/1.jpg'
import { GridGallery } from '../components/GridGallery/GridGallery';
import { PostResponse, getPostsByUid } from '../firebase/posts';
import { getFollowerCount, getFollowingCount, getUidFromUsername, onFollow } from '../firebase/users';
import { useParams } from 'react-router-dom';
import { ProfileHeader } from '../components/ProfileHeader/ProfileHeader';
import { LineChart } from '../components/LineChart/LineChart';
import { Card, LinearProgress, Skeleton } from '@mui/material';
import { ProfilePageLoadingState } from '../components/ProfilePageLoadingState/ProfilePageLoadingState';
import { useGetBreakpoints } from '../utils/useGetBreakpoint';


export const ProfilePage: React.FC = () => {
  const { username } = useParams();
  const [isLoading, setLoading] = React.useState(true);
  const [posts, setPosts] = React.useState<PostResponse[]>([])
  const [userId, setUserId] = React.useState()
  const isNarrow = useGetBreakpoints('md')
  const [followersCount, setFollowersCounts] = React.useState<number | undefined>()
  const [followingCount, setFollowingCount] = React.useState<number | undefined>();
  const init = async () => {
    if (!username) {
      setLoading(false);
      return;
    }
    try {
      const uid = await getUidFromUsername(username);
      setUserId(uid)
      const followingCount = await getFollowingCount(uid)
      setFollowingCount(followingCount);
      const followerCount = await getFollowerCount(uid);
      setFollowersCounts(followerCount);
      const posts = await getPostsByUid(uid);
      setPosts(posts)
      setLoading(false)
    } catch (e) {
      setLoading(false)
    }
  }

  React.useEffect(() => {
    init();
  }, [username])

  if (!isLoading && (!userId || !username)) {
    return (
      <div style={{width: '100%', textAlign: 'center'}}>
        No user found
      </div>
    )
  }
  if (isLoading && (!userId || !username)) {
    return (
      <div>
        <LinearProgress />
      </div>
    )
  }
  
  return (
    <div style={{margin: isNarrow ? '0':'0 10%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignSelf: 'flex-start', height: '100%' }}>
      <ProfileHeader followersCount={followersCount || 0} userId={userId || ''} image={image} followingCount={followingCount || 0} username={username || ''}/>
      { isLoading && posts.length === 0 && <ProfilePageLoadingState/>
}
      {/* <LineChart/> */}
      <GridGallery posts={posts} />
    </div>
  )
}