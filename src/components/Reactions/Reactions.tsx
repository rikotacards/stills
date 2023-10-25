import { Chip } from '@mui/material';
import React from 'react';
import { Emoji } from 'emoji-picker-react';
import { LongPressEventType, useLongPress } from 'use-long-press';
import { useDrawerContext } from '../../providers/DrawerProvider';
import { AllReactions } from '../AllReactions/AllReactions';
import { useReactionsContext } from '../../providers/ReactionsProvider';

interface ReactionsProps {
  postId: string;
}
export const Reactions: React.FC<ReactionsProps> = ({ postId }) => {
  const drawerContext = useDrawerContext();
  const {displayedReactions} = useReactionsContext();
  const onAllReactions = () => {
    drawerContext.setRenderComponent(AllReactions)
    drawerContext.onOpen()
  }
  console.log('displayed', displayedReactions)

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

  
    const rendered = [];
    let res = displayedReactions
      for (const key in res) {
        const count = Object.values(res[key]).length;
        rendered.push([key, count])
      }
      console.log('rendr', rendered)

  
  const reactions = rendered?.map((i) => {
    if (i[1] === 0 && i[0] !== '2764-fe0f') {
      return null
    } else {
      return (
        <Chip
          key={i[0]}
          {...handlers}
          className='emoji'
          sx={{ 
            mr: 1, 
            backdropFilter: 'blur(10px)' ,
            background:'rgba(0, 0, 0, 0.2)'

          }}
          size="small"
          variant="outlined"
          label={<div style={{ display: 'flex', alignContent: 'center', justifyContent: 'center', flexDirection: 'row' }}><div style={{ display: 'flex', alignItems: 'center', marginRight: 4 }}><Emoji size={15} unified={i[0]} /> </div>{i[1]}</div>} />
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