import React from 'react';
import './AddPostWidget.scss';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, IconButton, Input, Paper } from '@mui/material';
import { useAddPostContext } from '../../providers/AddPostProvider';
import { UploadImageThumbnail } from '../UploadImageThumbnail/UploadImageThumbnail';
interface AddPostWidgetProps {
  index: number
}
export const AddPostWidget: React.FC<AddPostWidgetProps> = ({index}) => {
  const AddPostContext = useAddPostContext();
  return (
    <Card sx={{mb:1}} className='add-post-widget'>
      <CardContent>
        <div className='text-image-container'>
          <div style={{height:100, width: 100}}>
            <UploadImageThumbnail index={index}/>
          </div>
            
          <div style={{marginLeft:8}} className='input-area'>
            <Input
              placeholder={"Write your caption..."}
              fullWidth
              multiline
              id="caption"
              type="text"
              disableUnderline
              sx={{flexGrow:1, height: '100%',width:'100%', display: 'flex', alignItems: 'flex-start', border: '1px solid black' }}
              />
          </div>
        </div>

      </CardContent>
      <CardActions>
        <Button size='small' onClick={() => AddPostContext.removePost(index)} variant='outlined' fullWidth >Remove <HighlightOffIcon /></Button>
      </CardActions>
    </Card>
  )
}