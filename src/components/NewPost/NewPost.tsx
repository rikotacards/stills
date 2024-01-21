import { Button, Collapse, Divider, Slider } from '@mui/material';
import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useAddPostContext } from '../../providers/AddPostProvider';
import { useNavigate } from 'react-router-dom';
import { AddPostWidget } from '../AddPostWidget/AddPostWidget';
import { addPost, saveDraft } from '../../firebase/posts';
import { sampleUid } from '../../configs/sampleData';
import { ENABLE_DRAFTS } from '../../configs/featureFlags';
import { useGetBreakpoints } from '../../utils/useGetBreakpoint';
import { DrawerProvider, useDrawerContext } from '../../providers/DrawerProvider';
import { DiscardConfirmation } from '../DiscardConfirmation/DiscardConfirmation';
const ENABLE_MOOD = false
interface NewPostProps {
  onNext?: () => void;
  goto: (page: number) => void;
}
const marks = [
  {
    value: -10,
    label: 'Terrible',
  },
  {
    value: -9,
  },
  {
    value: -8,
  },
  {
    value: -7,
  },
  {
    value: -6,
  },
  {
    value: -5,
  },
  {
    value: -4,
  },
  {
    value: -3,
  },
  {
    value: -2,
  },
  {
    value: -1,
  },
  {
    value: 0,
    label: 'Neutral',
  },
  {
    value: 1,
  },
  {
    value: 2,
  },
  {
    value: 3,
  },
  {
    value: 4,
  },
  {
    value: 5,
  },
  {
    value: 6,
  },
  {
    value: 7,
  },
  {
    value: 8,
  },
  {
    value: 9,
  },
  {
    value: 10,
    label: 'Great'
  },
];
export const NewPost: React.FC<NewPostProps> = ({ onNext, goto }) => {
  const addPostContext = useAddPostContext();
  const drawerContext = useDrawerContext();
  const nav = useNavigate()
  const { handleScoreChange } = useAddPostContext();
  const addPostWidgets = addPostContext.posts.map((_, i) => <AddPostWidget key={i} index={i} />)
  const [showMood, setShowMood] = React.useState(false);
  const isLessThanMd = useGetBreakpoints('md')
  
  const onCancel = () => {
    drawerContext.setRenderComponent(<DiscardConfirmation onDiscard={() => {addPostContext.clearPost(); drawerContext.onClose()}} onContinueEditing={drawerContext.onClose} />)
    drawerContext.onOpen();
  }
 

  const hasImage = !!addPostContext.posts.filter((p) => p.imagePath.length > 0).length
  const toggle = () => {
    setShowMood(!showMood);
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }} className='body'>

      {addPostWidgets}

      <Button sx={{ mb: 1 }} onClick={addPostContext.addPost} variant='outlined'>Add part</Button>
      <div style={{ display: 'flex', alignItems: 'center', width: '100%', flexDirection: 'column' }}>


        {ENABLE_MOOD && <Button fullWidth sx={{ mb: 1 }} variant='outlined' onClick={toggle} endIcon={<ExpandMoreIcon />}>Add mood</Button>}
        <Collapse sx={{ display: 'flex', flexDirection: 'column', width: '100%' }} in={showMood}>
          <div style={{ paddingLeft: 32, paddingRight: 32 }}>
            <Slider defaultValue={0}
              min={-10}
              marks={marks}
              valueLabelDisplay="auto"
              onChange={handleScoreChange}
              max={10} />
          </div>

        </Collapse>
      </div>

      <Button disabled={!hasImage} sx={{ mb: 3 }} onClick={onNext ? onNext : () => nav('/preview')} variant={hasImage ? 'contained' : 'outlined'}>Next</Button>

      {!isLessThanMd && <><Divider sx={{ width: '100%', mt: 1, mb: 3 }} />
        {ENABLE_DRAFTS && <Button sx={{ mb: 1 }} onClick={goto ? () => goto(2) : () => nav('/drafts')} variant='outlined'>Drafts</Button>}
        <Button sx={{ mb: 1 }} onClick={onCancel} variant='outlined'>Cancel</Button></>}






    </div>

  )
}