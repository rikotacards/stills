import React from 'react';
import { NewPost } from '../components/NewPost/NewPost';
import { sampleUid } from '../configs/sampleData';
import { PostResponse, getDraftsByUid } from '../firebase/posts';
import { GridGallery } from '../components/GridGallery/GridGallery';
import { Grid, Typography, imageListItemClasses } from '@mui/material';
import { useAddPostContext } from '../providers/AddPostProvider';
interface DraftsPageProps {
  nav?:(page: number) => void;
}
export const DraftsPage: React.FC<DraftsPageProps> = ({nav}) => {
  const [posts, setDrafts]=React.useState([] as PostResponse[])
  const {setFromDraft, setDraftId} = useAddPostContext();
  React.useEffect(() => {
    getDraftsByUid(sampleUid).then((res) => {
      console.log('res', res)
      setDrafts(res);
    })
  },[])
  const onClick = (post: PostResponse) => {
    setFromDraft(post.content)
    setDraftId(post.postId)
    nav && nav(0)
  }
  const items = posts.map((post) => <div key={post.postId} onClick={() => onClick(post)}><img  style={{height:'100%', width: '100%', objectFit: 'cover'}} src={post.content[0].imagePath}  /></div>)
  if(items.length === 0){
    return (
      <div style={{flexDirection: 'column', height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>

        <Typography fontWeight='bold'>No drafts</Typography>
      </div>
    )
  }
  return (
    <Grid container spacing={1}>
      {items}
    </Grid>
  )
}