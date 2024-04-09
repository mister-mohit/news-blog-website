import React, { useState } from "react";
import { storage } from "./firebase.config";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";
import { v4 } from "uuid";
import { MdDelete } from "react-icons/md";

const TitleImage = ({ handleChange, heading, imageAdd }) => {
  const [imageUpload, setImageUpload] = useState(null);

  const handleInputFocus = (ev) => {
    if (ev.type === "focus") {
      ev.target.parentNode.style.border = "1px solid black";
    } else {
      ev.target.parentNode.style.border = "1px solid white";
    }
  };

  //function to upload image to firebase
  const uploadFile = () => {
    if (!imageUpload || imageAdd.length > 0) return;

    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload)
      .then((snapshot) => {
        getDownloadURL(imageRef)
          .then((url) => {
            handleChange(url, "img");
            alert("image uploaded successfully");
          })
          .catch((error) => {
            alert(error.message);
          });
      })
      .catch((error) => {
        alert(error.message);
        alert("error in uploading image");
      });
  };

  const deleteImage = async (imageAdd, isBlogDeleted) => {
    const deleted = await deleteImg(imageAdd);
    if (deleted && !isBlogDeleted) {
      handleChange("", "img");
      alert("image deleted successfully");
    }
    if (!deleted && !isBlogDeleted) {
      alert("error deleted image");
    }
  };

  return (
    <div
      tabIndex={1}
      className="flex flex-col gap-2 p-2 w-full overflow-hidden bg-white border rounded-md"
    >
      <label htmlFor="heading" className="pl-2 text-2xl">
        What's your Title today
      </label>
      <input
        name="heading"
        className="w-full p-2 mt-1 border-solid border-black border-b focus:outline-none focus:bg-gray-200"
        type="text"
        value={heading}
        onChange={(ev) => handleChange(ev.target.value, "heading")}
        placeholder="Cook your title here..."
        onFocus={handleInputFocus}
        onBlur={handleInputFocus}
      />

      <div className="flex gap-2">
        <label htmlFor="name" className="text-md font-bold">
          Add Cover Image:
        </label>
        <input
          className="self-start"
          type="file"
          name="image"
          accept="image/png, image/jpeg"
          onChange={(e) => setImageUpload(e.target.files[0])}
          disabled={imageAdd.length > 0 ? true : false}
        />
        <button
          onClick={uploadFile}
          disable={imageAdd.length > 0 ? true : false}
        >
          {imageAdd.length > 0 ? "Already uploaded image" : "Upload Image"}
        </button>
        {imageAdd.length > 0 ? (
          <MdDelete onClick={() => deleteImage(imageAdd)} />
        ) : null}
      </div>
    </div>
  );
};

//function to delete uploaded image
const deleteImg = async (imageAdd) => {
  try {
    const desertRef = ref(storage, `${imageAdd}`);
    await deleteObject(desertRef);
    return true;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

export default TitleImage;
export { deleteImg };
