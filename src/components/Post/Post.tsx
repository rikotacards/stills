import React from "react";
import { PostHeader } from "../PostHeader/PostHeader";
import { Box } from "@mui/material";
import { PostFooter } from "../PostFooter/PostFooter";
import image from "./demoPost1Part1.jpg";
export const Post: React.FC = () => {
  return (
    <Box
      borderRadius={2}
      overflow={"hidden"}
      position={"relative"}
      height={600}
      width={470}
      border={"1px solid black"}
    >
      <PostHeader />
      <img
        style={{
          position: "relative",
          height: "100%",
          width: "100%",
          objectFit: "cover",
        }}
        src={image}
      />
      <PostFooter />
    </Box>
  );
};
