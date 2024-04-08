import React, { useRef } from "react";
import JoditEditor from "jodit-react";
import Button from "./Button";
import { useParams } from "react-router-dom";
import useCustomQuery from "../../customHooks/Author/useCustomQuery";
import TitleImage from "./TitleImage";
import Category from "./Category";

const BlogEditor = ({ placeholder }) => {
  const editor = useRef(null);
  const { blogId } = useParams();
  let categories = ["Politics", "Education", "Technology", "News"];
  const [isLoading, isError, data, error, blog, handleChange] =
    useCustomQuery(blogId);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#F9EFDB]  flex items-center justify-center">
        Loading
      </div>
    );
  }
  if (isError) {
    return <div>{error.message}</div>;
  }

  const {
    _id,
    title: heading,
    content,
    imageAdd,
    category,
  } = blog ? blog : data;

  return (
    <div className="p-20 min-h-screen bg-[#F9EFDB]  flex flex-col gap-4">
      <Button handleChange={handleChange} id={_id} />
      {/* div for title and image */}
      <TitleImage
        handleChange={handleChange}
        heading={heading}
        imageAdd={imageAdd}
      />

      {/* text editor */}
      <JoditEditor
        ref={editor}
        value={content}
        tabIndex={1} // tabIndex of textarea
        onChange={(newContent) => handleChange(newContent, "content")}
      />

      {/* div for category selection */}
      <Category
        handleChange={handleChange}
        categories={categories}
        category={category}
      />
    </div>
  );
};
export default BlogEditor;
