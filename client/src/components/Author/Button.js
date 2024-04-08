import useBlogStatus from "../../customHooks/Author/useBlogStatus";

const Button = ({ handleChange, id }) => {
  const [deleteBlog] = useBlogStatus();
  return (
    <div className="flex gap-2 justify-between">
      <button
        className={`py-1 px-2 bg-green-500 text-white border rounded-md `}
        onClick={(ev) => handleChange(ev.target.value, "publish")}
      >
        Publish
      </button>
      <button
        className={`py-1 px-2 bg-blue-500 text-white border rounded-md `}
        onClick={(ev) => handleChange(ev.target.value, "draft")}
      >
        Draft
      </button>
      <div className="flex-grow"></div>
      <button
        className={`py-1 px-2 bg-red-500 text-white border rounded-md `}
        onClick={() => deleteBlog(id, handleChange)}
      >
        delete
      </button>
    </div>
  );
};

export default Button;
