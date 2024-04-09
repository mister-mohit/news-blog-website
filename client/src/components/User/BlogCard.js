import { IoCalendarClear } from "react-icons/io5";
import { GiCharacter } from "react-icons/gi";

const BlogCard = ({ data }) => {
  const content = data.content;
  const parser = new DOMParser();
  const doc = parser.parseFromString(content, "text/html");
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="sm:w-[45%] w-fit h-fit  border border-gray-300 rounded-md ">
      <div className="h-[180px] w-full border-b border-gray-300 ">
        <img
          className="w-full h-full object-contain"
          src={data.imageAdd}
          alt="blogImage"
        />
      </div>
      <div className="p-6 flex flex-col gap-3 items-start ">
        <button className="py-1 px-2 bg-[#c57eef] text-white rounded-sm">
          {data.category}
        </button>
        <div className="flex gap-2">
          <span className="flex gap-1">
            <IoCalendarClear className="my-auto" />
            <p>{year}</p>
          </span>
          <span className="flex gap-1">
            <GiCharacter className="my-auto" />
            <p>{data.author}</p>
          </span>
        </div>
        <div>
          <h3 className="text-2xl font-semibold break-all">{data.title}</h3>
          <p className="text-gray-600 break-all">{`${doc.body.textContent.slice(
            0,
            165
          )}...`}</p>
        </div>
        <button className="p-2 bg-[#207daf] text-white font-semibold rounded-md">
          Read More
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
