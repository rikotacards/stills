import { Avatar, Divider, Typography } from "@mui/material";
import React from "react";
import './NotificationItem.scss'
import { Emoji } from "emoji-picker-react";
import image from '../../assets/1.jpg'
export const notificationMessage: { [key: string]: string } = {
  0: "reacted with ",
  followed: "started following you",
};

interface NotificationItemProps {
  senderUid: string;
  receiverUid: string;
  payloadId: string;
  unified?: string;
  postId: string;
}
export const NotificationItem: React.FC<NotificationItemProps> = (props) => {
  const { senderUid, receiverUid, payloadId, unified, postId } = props;
  // const { post, isLoading } = useGetPostByPostId(receiverUid, postId);
  // const userInfoData = useGetUserInfo(senderUid);
  // const [image, setImage] = React.useState("");
  // if (isLoading) {
  //   return <></>;
  // }

  
  const senderUsername = 'Max'
  const redirectToPost = () => {
   //redirect
  };
  return (
    <div>
      <div className={'container'} onClick={redirectToPost}>
        <div>
          <Avatar
            sx={{ height: 32, width: 32 }}
            src='/'
            // src={userInfoData?.data?.photoUrl}
          >
            m
          </Avatar>
        </div>
        <div style={{ marginLeft: "8px", display: "flex" }}>
          <Typography
            sx={{ marginRight: 0.5 }}
            variant="body2"
            fontWeight={600}
          >
            {senderUsername}
          </Typography>
          <div style={{ display: "flex", alignItems: 'center'}}>
            <Typography variant="body2" sx={{ marginRight: 1 }}>
              {notificationMessage[payloadId]}
            </Typography>
            {unified && <Emoji size={18} unified={unified} />}
            <Typography sx={{ marginLeft: 0.5 }} variant="body2">
              {"on your post."}
            </Typography>
          </div>
        </div>
        <img
          src={image}
          style={{
            objectFit: "cover",
            marginLeft: "auto",
            height: 50,
            width: 50,
            visibility: !image ? "hidden" : undefined,
          }}
        />
      </div>
      <Divider sx={{ width: "100%" }} />
    </div>
  );
};
