import React from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import './AddPostWidget.scss';
import { Button, Card, CardActions, CardContent, CardMedia, IconButton, Input, Paper } from '@mui/material';
import { useAddPostContext } from '../../providers/AddPostProvider';
import { UploadImageThumbnail } from '../UploadImageThumbnail/UploadImageThumbnail';
interface AddPostWidgetProps {
  index: number
}
export const AddPostWidget: React.FC<AddPostWidgetProps> = ({ index }) => {
  const { posts, removePost, onTextChange } = useAddPostContext();
  return (
    <Card variant='outlined' sx={{ mb: 1 }} className='add-post-widget'>
      <CardContent>
        <div className='text-image-container'>
          <div style={{ height: 100, width: '30%' }}>
            <UploadImageThumbnail index={index} />
          </div>

          <div style={{ marginLeft: 8 }} className='input-area'>
            <Input
              placeholder={"Write your story..."}
              fullWidth
              multiline
              id="caption"
              type="text"
              value={posts[index].caption}
              onChange={(e) => { onTextChange(e, index) }}
              disableUnderline
              sx={{ flexGrow: 1, height: '100%', width: '100%', display: 'flex', alignItems: 'flex-start' }}
            />
          </div>
        </div>

      </CardContent>
      <CardActions>
        {index!== 0 && <div style={{marginLeft: 'auto'}}>
        <IconButton onClick={() => removePost(index)}>
          <DeleteForeverIcon/>
        </IconButton>
        </div>}
      </CardActions>
    </Card>
  )
}