import { Box, Chip, IconButton } from "@mui/material";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import React from "react";
import './PostFooter.scss';
import { Caption } from "../Caption/Caption";
const react = [1,2,3,4,5,6]
export const PostFooter: React.FC = () => {
  const [expanded, setOn] = React.useState(false);
  const onClick = () => {
    setOn(!expanded);
  }
  const reactions = react.map((r) =>  <Chip  sx={{ mr: 1, color: 'white' }} size="small" variant="outlined" label={`🔥14`} />)
  return (
    <div className='post-footer' style={{ 
      maxHeight: expanded ? '50%': '18%',
      display: 'flex', 
      flexDirection: 'column', 
      bottom: '0px', 
      position: 'absolute', 
      justifyContent: 'flex-end',
      transition: 'height 0.2s linear',
      width: '100%' }}>

      <Caption expanded={expanded} onClick={onClick} />
      <Box
        display={"flex"}
        alignItems={"center"}
        flexDirection={"row"}
        width="100%"
        className='reactions-container'
      >
        <div style={{padding: '8px'}} className='reactions'>
         {reactions}
          

        </div>

        <Box ml="auto">
          <IconButton size="small">
            <EmojiEmotionsIcon />
          </IconButton>
        </Box>
      </Box>
    </div>
  );
};
