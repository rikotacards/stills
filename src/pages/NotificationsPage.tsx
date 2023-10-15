import React from 'react';
import { NotificationItem } from '../components/NotificationItem/NotificationItem';
const sampleData = [{
unified: "1f525"
}, {
  unified: "1f525"
  }]
export const NotificationsPage: React.FC = () => {
  const notifications = sampleData.map((data) => <NotificationItem senderUid={''} receiverUid={''} payloadId={''} postId={''}/>)
  return (
    <div className='notification-page'>
      <div className='body'>

      {notifications}
      </div>
    </div>
  )
}