import React from 'react';
import { Comment } from '../Comment/Comment';
const commentsData = [
  {
    username: 'max', 
    comment: 'Lol what'
  }
]
export const Comments: React.FC = () => {
  const renderedComments = commentsData.map((a) =><Comment />)
  return (
    <>
    {renderedComments}
    </>
  )
}