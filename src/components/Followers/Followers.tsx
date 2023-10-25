import React from 'react';
import { CustomToolbar } from '../CustomToolbar/CustomToolbar';
import { useGetBreakpoints } from '../../utils/useGetBreakpoint';
import { useDrawerContext } from '../../providers/DrawerProvider';
import {  getFollowers } from '../../firebase/users';
import { sampleUid } from '../../configs/sampleData';
export const Followers: React.FC = () => {
  const isLessThanMd = useGetBreakpoints('md');

  const {onClose} = useDrawerContext();
  const [followers, setFollowers] = React.useState<any[]>([])
  React.useEffect(() => {
    getFollowers(sampleUid).then((res) => {
      console.log(res)
      setFollowers(res)
    })
  },[])
  return (
    <div>
      <CustomToolbar onClose={onClose} title='followers' isModal={!isLessThanMd} />
      {followers.map((follower) =><div key={follower?.id}>{follower}</div>)}
      {followers.length === 0 && <div>No Followers</div>}
    </div>
  )
}