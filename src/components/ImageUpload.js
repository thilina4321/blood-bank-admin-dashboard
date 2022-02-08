import React, { useEffect, useRef, useState } from "react";

const ImageUpload = (props) => {
  const { url, setFile, setModelUrl } = props;

  const imageRef = useRef();
  const [imageFile, setImageFile] = useState();
  const [imageUrl, setImageUrl] = useState(url ? url : "");

  useEffect(() => {
    if (imageFile) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setImageUrl(fileReader.result);
        setModelUrl(fileReader.result);
      };
      fileReader.readAsDataURL(imageFile);
    }
  }, [imageFile, setModelUrl]);

  const inputHandler = () => {
    imageRef.current.click();
  };

  const pickedImage = (event) => {
    if (event.target.files && event.target.files.length === 1) {
      setImageFile((_) => event.target.files[0]);
      setFile((_) => event.target.files[0]);
    }
  };

  return (
    <div>
      <input
        style={{ visibility: "hidden" }}
        accept=".jpg,.png,.jpeg"
        onChange={pickedImage}
        ref={imageRef}
        type="file"
        multiple
      />

      <div style={{ marginBottom: "20px" }}>
        {imageUrl ? (
          <img width={"200px"} height={"200px"} src={imageUrl} alt="preview" />
        ) : (
          <p>Please pick a image</p>
        )}
      </div>
      <button
        className="image-button"
        onClick={inputHandler}
        type="button"
      >
        Pick Image
      </button>
    </div>
  ); 
};

export default ImageUpload;
