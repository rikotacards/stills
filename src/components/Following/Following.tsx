import React from 'react';
import { CustomToolbar } from '../CustomToolbar/CustomToolbar';
import { useGetBreakpoints } from '../../utils/useGetBreakpoint';
import { useDrawerContext } from '../../providers/DrawerProvider';
import {   getFollowing } from '../../firebase/users';
import { sampleUid } from '../../configs/sampleData';
export const Following: React.FC = () => {
  const isLessThanMd = useGetBreakpoints('md');
  const {onClose} = useDrawerContext();
  const [following, setFollowing] = React.useState<any[]>([])
  React.useEffect(() => {
    getFollowing(sampleUid).then((res) => {
      console.log(res)
      setFollowing(res)
    })
  },[])
  return (
    <div>
      <CustomToolbar onClose={onClose} title='Following' isModal={!isLessThanMd} />
      {following.map((follower) =><div key={follower?.id}>{follower}</div>)}
      {following.length === 0 && <div>No Followers</div>}
    </div>
  )
}