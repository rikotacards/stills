import { Button, IconButton, Paper } from '@mui/material';
import React from 'react';
import { useDrawerContext } from '../../providers/DrawerProvider';
import { quickSelectEmojis } from '../../configs/emojisQuickSelect';
import EmojiPicker from 'emoji-picker-react';
import { CustomToolbar } from '../CustomToolbar/CustomToolbar';
import { addReaction } from '../../firebase/reactions';
import { sampleUid } from '../../configs/sampleData';
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
const emojis = quickSelectEmojis.map((e) => <IconButton key={e.unified} onClick={() => onAdd({uid:sampleUid, unified:e.unified})}>{e.symbol}</IconButton>)
  return (
    <div>
      <CustomToolbar onClose={onClose} title='Reactions' isModal={isModal}/>
      <div style={{display: 'flex', flexDirection: 'column'}}>

        <div>

        {emojis}
        </div>
        <Button onClick={onShow}>{show? 'Less':'More'}</Button>
      </div>
      {show && <EmojiPicker lazyLoadEmojis searchDisabled autoFocusSearch={false}/>}
    </div>
  )
}