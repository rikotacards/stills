import { Button, IconButton } from '@mui/material';
import React from 'react';
import { useDrawerContext } from '../../providers/DrawerProvider';
import { quickSelectEmojis } from '../../configs/emojisQuickSelect';
import EmojiPicker from 'emoji-picker-react';
import { CustomToolbar } from '../CustomToolbar/CustomToolbar';
interface ReactionsDrawerContentProps {
  postId: string;
  isModal?: boolean;
}
export const ReactionsDrawerContent: React.FC<ReactionsDrawerContentProps> = ({isModal}) => {
  const {onClose} = useDrawerContext();
  const [show, setShow] = React.useState(false);
  const onShow = () => {
    setShow(!show);
  }
const emojis = quickSelectEmojis.map((e) => <IconButton>{e.symbol}</IconButton>)
  return (
    <div>
      <CustomToolbar onClose={onClose} title='Reactions' isModal={isModal}/>
      <div>
        {emojis}
        <Button onClick={onShow}>{show? 'Less':'More'}</Button>
      </div>
      {show && <EmojiPicker/>}
    </div>
  )
}