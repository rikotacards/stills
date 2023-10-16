import React from 'react';
import { UserRow } from '../UserRow/UserRow';
const allUsers = ['max', 'Helen', 'Tony', 'Tobi', 'Camille']
export const AllUsers: React.FC = () => {
 const users = allUsers.map((u) => <UserRow/>)
  return (
    <div style={{display: 'flex', width: '100%', flexDirection: 'column'}}>
    {users}
    </div>
 )
}