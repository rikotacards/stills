import { Card, CardActionArea } from "@mui/material";
import React from "react";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { useAddPostContext } from "../../providers/AddPostProvider";
import './UploadImageThumbnail.scss'
interface UploadImageThumbnailProps {
  index: number;
  imagePath?: string;
}

export const UploadImageThumbnail: React.FC<UploadImageThumbnailProps> = ({
  index,
  imagePath
}) => {
  const [images, setImages] = React.useState([] as any);
  const addPostContext = useAddPostContext();
  const [imageURLS, setImageURLs] = React.useState(imagePath?.length ? [imagePath] : []);
  const hasImage = !!addPostContext.posts[index]?.imageUrl?.length || !!imageURLS.length
  const inputRef = React.useRef<HTMLInputElement>(null);
  React.useEffect(() => {
    if (images.length < 1) return;
    const newImageUrls: any = [];
    const blobs: string[] = [];
    images.forEach(async (image: any) => {

      newImageUrls.push(URL.createObjectURL(image))
      let dataUrl = await new Promise(r => {
        let a = new FileReader();
        a.onload = r;
        a.readAsDataURL(image)
      }).then((e) => {
        // todo
        let b = e as any
        return (b.target?.result)
      });
      blobs.push(dataUrl)
      addPostContext.addImage(newImageUrls[0], index, blobs[0])
    }
    )
    setImageURLs(newImageUrls);
    return () => {
      setImages([])
    }
  }, [images, addPostContext, index]);

  const onImageChange = (e: any) => {
    setImages([...e.target.files]);
  };
  const handleClick = () => {
    if (inputRef.current !== null) {
      inputRef.current.click();
    }
  };
  const image = <img
    style={{
      height: "100%",
      width: "100%",
      objectFit: "contain",
      
    }} alt={''}
    src={addPostContext.posts[index].imagePath || imageURLS[0]} />
  return (
      <Card  className={'imageCard'}>
        <CardActionArea className='card-action' onClick={handleClick}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              width: "100%",
            }}
          >
            {hasImage &&
              image
            }

            <input
              type="file"
              style={{ display: "none" }}
              ref={inputRef}
              accept="image/*"
              onChange={onImageChange}
            />

            {!hasImage && <AddPhotoAlternateIcon color="action" />}
          </div>
        </CardActionArea>
      </Card>
     
  );
};
