import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { IoCalendarClear } from "react-icons/io5";
import { GiCharacter } from "react-icons/gi";
import Aside from "./Aside";

const ShowBlog = () => {
  const { blogId } = useParams();
  const { data, isLoading, error } = useQuery({
    queryKey: ["blogId", blogId],
    queryFn: async () => {
      const response = await fetch(
        `https://news-blog-website-production.up.railway.app/getBlog/${blogId}`
      );
      if (!response.ok) {
        throw new Error("cannot fetch blog");
      }
      return response.json();
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div className="flex lg:flex-row lg:items-start items-center flex-col py-20 text-xl justify-center gap-16 ">
      <section className="w-[90%] lg:w-[50%] border border-gray-400 rounded-md flex flex-col gap-2 bg-white">
        <img
          src={data.imageAdd}
          alt="loading"
          className="h-[450px] w-full mb-4 border-b border-gray-200"
        />
        <div className="p-6 flex flex-col items-start gap-4">
          <a
            href={`/${data.category}`}
            className="py-1 px-2 bg-[#c57eef] text-white rounded-sm"
          >
            {data.category}
          </a>
          <h1 className="font-semibold text-3xl break-all">{data.title}</h1>
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
          <div
            className="flex flex-col gap-4 mt-2 custom-class custom-p"
            dangerouslySetInnerHTML={{ __html: data.content }}
          ></div>
        </div>
      </section>
      <Aside isBlog={true} blogId={data._id} category={data.category} />
    </div>
  );
};

export default ShowBlog;
