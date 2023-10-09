import React from 'react';
import { CustomToolbar } from '../CustomToolbar/CustomToolbar';
import { useDrawerContext } from '../../providers/DrawerProvider';
import { Box, Tab, Tabs } from '@mui/material';
import { modalMaxHeight, postWidth } from '../../configs/dimensions';
import { ReactionRow } from '../ReactionRow/ReactionRow';

const reactions = [{
  value: 'one', 
  emoji: "🔥"
}, {
  value: 'two', 
  emoji: "🔥"
}, {
  value: 'three', 
  emoji: "🔥"
}, {
  value: 'four', 
  emoji: "🔥"
}, {
  value: 'five', 
  emoji: "🔥"
}, {
  value: 'six', 
  emoji: "🔥"
},{
  value: 'six', 
  emoji: "🔥"
}]

const reactionRows = [1,2,3,4,5,6,7]

const TabPanel: React.FC = () => {
  const rows = reactionRows.map((row) => <ReactionRow/>)
  return (
    <Box maxHeight={400} overflow={'auto'} >
      {rows}
      </Box>
  )
}

export const AllReactions: React.FC = () => {
  const {onClose} = useDrawerContext();
  const [value, setValue] = React.useState(1)
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const tabLabels = reactions.map((reaction) => <Tab label={reaction.emoji}/>)
  return (
    <div>
      <CustomToolbar onClose={onClose} title='All Reactions'/>
      <Tabs   variant="scrollable"
        scrollButtons="auto"

 value={value} onChange={handleChange}>
        {tabLabels}
      </Tabs>
      <TabPanel/>

    </div>

  )
}