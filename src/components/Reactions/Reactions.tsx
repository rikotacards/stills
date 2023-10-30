import { Chip, Typography } from '@mui/material';
import React from 'react';
import { Emoji } from 'emoji-picker-react';
import { LongPressEventType, useLongPress } from 'use-long-press';
import { useDrawerContext } from '../../providers/DrawerProvider';
import { AllReactions } from '../AllReactions/AllReactions';
import { useReactionsContext } from '../../providers/ReactionsProvider';
import { sampleUid } from '../../configs/sampleData';

interface ReactionsProps {
  postId: string;
}
export const Reactions: React.FC<ReactionsProps> = ({ postId }) => {
  const drawerContext = useDrawerContext();
  const {displayedReactions, onAdd} = useReactionsContext();
  const onAllReactions = () => {
    drawerContext.setRenderComponent(<AllReactions/>)
    drawerContext.onOpen()
  }

  const callback = React.useCallback(() => {
    onAllReactions();
  }, []);
  const bind = useLongPress(callback, {
    filterEvents: (event) => true, // All events can potentially trigger long press
    threshold: 500,
    captureEvent: true,
    cancelOnMovement: false,
    cancelOutsideElement: true,
    detect: LongPressEventType.Pointer
  })
  const handlers = bind('test')

  
    const rendered:[string, number][] = [];
    let res = displayedReactions
      for (const key in res) {
        const count = Object.values(res[key]).length;
        rendered.push([key, count])
      }

  
  const reactions = rendered?.map((i) => {
    if (i[1] === 0 && i[0] !== '2764-fe0f') {
      return null
    } else {
      return (
        <Chip
          key={i[0]}
          {...handlers}
          onClick={() => onAdd({ uid: sampleUid, unified:i[0]})}
          className='emoji'
          sx={{ 
            mr: 1, 
            backdropFilter: 'blur(10px)' ,
            background:'rgba(0, 0, 0, 0.2)'

          }}
          size="small"
          variant="outlined"
          label={<div style={{ 
            display: 'flex', 
            alignContent: 'center', justifyContent: 'center', flexDirection: 'row' }}><div style={{pointerEvents: 'none', display: 'flex', alignItems: 'center', marginRight: 4 }}><Emoji size={13} unified={i[0]} /> </div><Typography variant='caption'>{i[1]}</Typography></div>} />
      )
    }
  }
  )
  return (
    <>
      {reactions}
    </>
  )
}