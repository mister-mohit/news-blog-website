import { useNavigate } from "react-router-dom";
import { deleteImg } from "../../components/Author/TitleImage";

const useBlogStatus = () => {
  const navigate = useNavigate();

  const deleteBlog = (blogId, handleChange) => {
    fetch(`http://localhost:5000/delete/${blogId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(async (res) => {
        if (res.imageAdd?.length) {
          try {
            await deleteImg(res.imageAdd, true);
          } catch (error) {
            throw error;
          }
        }
        alert("blog deleted successfully");
        navigate("/author");
      })
      .catch((error) => {
        alert("Unable to delete blog try again.");
      });
  };

  return [deleteBlog];
};

export default useBlogStatus;
