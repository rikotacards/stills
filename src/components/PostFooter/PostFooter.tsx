import { Box, Chip, IconButton, SvgIcon } from "@mui/material";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import React from "react";

export const PostFooter: React.FC = () => {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      flexDirection={"row"}
      width="100%"
      position={"absolute"}
      padding={1}
      bottom={0}
    >
      <Box whiteSpace={'nowrap'} sx={{overflowX: 'scroll', '::-webkit-scrollbar': 'none'}}>

      <Chip sx={{mr:1}} size="small" variant="outlined" label={`🔥14`} />
      <Chip sx={{mr:1}} size="small" variant="outlined" label={`🔥14`} />
      <Chip sx={{mr:1}} size="small" variant="outlined" label={`🔥14`} />
      <Chip sx={{mr:1}} size="small" variant="outlined" label={`🔥14`} />
      <Chip sx={{mr:1}} size="small" variant="outlined" label={`🔥14`} />
      <Chip sx={{mr:1}} size="small" variant="outlined" label={`🔥14`} />
      <Chip sx={{mr:1}} size="small" variant="outlined" label={`🔥14`} />
      <Chip sx={{mr:1}} size="small" variant="outlined" label={`🔥14`} />
      <Chip sx={{mr:1}} size="small" variant="outlined" label={`🔥14`} />
      <Chip sx={{mr:1}} size="small" variant="outlined" label={`🔥14`} />

      </Box>

      <Box ml="auto">
        <IconButton size="small">
          <EmojiEmotionsIcon />
        </IconButton>
      </Box>
    </Box>
  );
};
