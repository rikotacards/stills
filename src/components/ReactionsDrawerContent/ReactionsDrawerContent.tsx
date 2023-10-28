import { Button, IconButton } from '@mui/material';
import React from 'react';
import { useDrawerContext } from '../../providers/DrawerProvider';
import { quickSelectEmojis } from '../../configs/emojisQuickSelect';
import EmojiPicker, { EmojiClickData } from 'emoji-picker-react';
import { CustomToolbar } from '../CustomToolbar/CustomToolbar';
import { sampleUid } from '../../configs/sampleData';
import AddIcon from '@mui/icons-material/Add';

import { useReactionsContext } from '../../providers/ReactionsProvider';
interface ReactionsDrawerContentProps {
  postId: string;
  isModal?: boolean;
}
export const ReactionsDrawerContent: React.FC<ReactionsDrawerContentProps> = ({isModal, postId}) => {
  const {onClose} = useDrawerContext();
  const [show, setShow] = React.useState(false);
  
  const {onAdd} = useReactionsContext();
  const onShow = () => {
    setShow(!show);
  }
const emojis = quickSelectEmojis.map((e) => <IconButton 
key={e.unified} 
onClick={
  () => onAdd({uid:sampleUid, unified:e.unified
  })}>
  {e.symbol}
  </IconButton>)
emojis.push(<IconButton onClick={onShow}><AddIcon/></IconButton>)
const onEmojiPickerAdd = (data: EmojiClickData) => {
  const unified = data.unified
    onAdd({uid:sampleUid, unified})
    onClose();
}
  return (
    <div>
      <CustomToolbar onClose={onClose} title='Reactions' isModal={isModal}/>
      <div style={{display: 'flex', flexDirection: 'column', padding:8}}>

        <div style={{display: 'flex', justifyContent: 'space-between'}}>

        {emojis}
        </div>
        <Button onClick={onShow}>{show? 'Less':'More'}</Button>
      </div>
      {show && <EmojiPicker 
      width='100%' 
      onEmojiClick={onEmojiPickerAdd}
      lazyLoadEmojis 
      theme='dark'
      searchDisabled={true} 
      autoFocusSearch={false}/>}
    </div>
  )
}
