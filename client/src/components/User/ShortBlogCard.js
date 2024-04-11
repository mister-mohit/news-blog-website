import { IoCalendarClear } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const ShortBlogCard = ({ blogData }) => {
  const navigate = useNavigate();
  return (
    <div
      className="h-[80px] w-[360px] bg-white flex gap-2 rounded-md overflow-hidden"
      onClick={() => navigate(`/blogId/${blogData._id}`)}
    >
      <img className="h-full w-[20%]" src={blogData.imageAdd} alt="loading" />

      <div className="flex flex-col justify-around  p-2 grow">
        <p className="text-[16px] font-semibold break-all">{blogData.title}</p>
        <div className="flex items-start gap-2 text-gray-600 text-sm">
          <IoCalendarClear className="my-auto" />
          <p>2024</p>
        </div>
      </div>
    </div>
  );
};

export default ShortBlogCard;
