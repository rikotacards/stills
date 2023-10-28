import React from 'react';
import './Comment.scss';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Avatar, IconButton, Typography } from '@mui/material';
import { IComment, getCommentsByPostId } from '../../firebase/comments';
interface CommentProps {
  postId: string;
}
export const Comments: React.FC<CommentProps> = ({ postId }) => {
  const [isLoading, setLoading] = React.useState(true);
  const [comments, setComments] = React.useState<IComment[]>([])
  const init = async () => {
    const res = await getCommentsByPostId(postId);
    res && setComments(res);
  }
  React.useEffect(() => {
    init();
  }, [postId])
  const rendered = comments.map((c) => {
    return (
      <div key={c.postTime} style={{ marginTop: 0, marginBottom: 16, width: '100%' }}>

        <div className='comment'>
          <Avatar sx={{ height: '20px', width: '20px', mr: 1, mt: 0.5 }} />
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>

              <Typography>Maxwelldhsu</Typography>
              <Typography>{c.text}</Typography>
            </div>
            <div style={{ marginLeft: 'auto' }}>
              <IconButton>

                <MoreVertIcon color='action' />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    )
  })
  return (
    <>{rendered}
    </>
  )
}