import { useNavigate } from "react-router-dom";

const BlogDisplay = ({ blog }) => {
  const navigate = useNavigate();
  return (
    <div
      className="flex p-2 border-b border-gray-100"
      onClick={() => {
        navigate(`/blog/${blog._id}`)
      }}
    >
      <div>
        <input name={blog._id} type="checkbox" className="mr-8 ml-2" />
        <label htmlFor={blog._id} value={blog.title} className="font-semibold">
          {blog.title}
        </label>
      </div>
      <div>
        <span>{blog.createdAt}</span>
      </div>
    </div>
  );
};

export default BlogDisplay;
