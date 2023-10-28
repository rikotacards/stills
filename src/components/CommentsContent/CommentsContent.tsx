import React from 'react';
import { useDrawerContext } from '../../providers/DrawerProvider';
import { CustomToolbar } from '../CustomToolbar/CustomToolbar';
import { Avatar, Button, Input, Toolbar } from '@mui/material';
import { sampleUid } from '../../configs/sampleData';
import { addComment } from '../../firebase/comments';
import { Comments } from '../Comments/Comments';
interface CommentsContentProps {
  postId: string;
  isModal?: boolean;
}
export const CommentsContent: React.FC<CommentsContentProps> = ({
  isModal, postId
}) => {
  const {onClose} = useDrawerContext();
  const [text, setText ] = React.useState<string>('')
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    e.preventDefault();
    setText(e.target.value)
  }
  const showPostBtn = text.length > 0;
  return (
    <div>
      <CustomToolbar title='Comments' isModal={isModal} onClose={onClose} />
      <div style={{padding: 8}}>
      <Comments postId={postId}/>
      </div>
      <div style={{display: 'flex', alignItems: 'center', padding: 8}}>
        <Avatar sx={{mr:1, height:'30px', width: '30px'}}/>
        <Input fullWidth onChange={onChange} value={text} placeholder="Add a comment" disableUnderline />
        {showPostBtn && <Button sx={{textTransform: 'capitalize'}} onClick={() => addComment({uid: sampleUid, postId, text})} variant='contained' size='small'>Post</Button>}
      </div>
      <Toolbar/>
    </div>
  )
}