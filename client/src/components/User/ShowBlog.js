import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { IoCalendarClear } from "react-icons/io5";
import { GiCharacter } from "react-icons/gi";

const ShowBlog = () => {
  const { blogId } = useParams();
  const { data, isLoading, error } = useQuery({
    queryKey: ["blogId", blogId],
    queryFn: async () => {
      const response = await fetch(`http://localhost:5000/getBlog/${blogId}`);
      if (!response.ok) {
        throw new Error("cannot fetch blog");
      }
      return response.json();
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }


  return (
    <div className="flex py-8 text-xl justify-center items-center">
      <section className=" w-[45%] border border-gray-400 rounded-md ">
        <img src={data.imageAdd} alt="loading" className="h-[360px] w-full object-contain mb-4" />
        <div className="p-6 flex flex-col items-start gap-4">
        <button className="py-1 px-2 bg-[#c57eef] text-white rounded-sm">
          {data.category}
        </button>
        <h1 className="font-semibold text-3xl" >{data.title}</h1>
        <div className="flex gap-2 text-gray-600 text-sm">
          <span className="flex gap-1">
            <IoCalendarClear className="my-auto" />
            <p>2024</p>
          </span>
          <span className="flex gap-1">
            <GiCharacter className="my-auto" />
            <p>{data.author}</p>
          </span>
        </div>
        <div className="flex flex-col gap-4 custom-class" dangerouslySetInnerHTML={{ __html: data.content }}></div>
        </div>
      </section>
    </div>
  );
};

export default ShowBlog;
