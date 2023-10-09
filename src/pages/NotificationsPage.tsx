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
    <div style={{
      display: 'flex',
      margin: '0 auto',
      background: 'red',
      flexDirection: 'column',
      border: '1px solid black',
      width: '100%'
    }}>
      {notifications}
    </div>
  )
}