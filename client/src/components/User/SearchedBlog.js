import { useLocation } from "react-router-dom";
import BlogCard from "./BlogCard";
import { useQuery } from "@tanstack/react-query";
import Aside from "./Aside";

const SearchedBlog = () => {
  const location = useLocation();
  const searchStr = new URLSearchParams(location.search);

  const queryParam = searchStr.get("queryParam");

  const { data, isLoading, error } = useQuery({
    queryKey: ["queryParam", queryParam],
    queryFn: async () => {
      try {
        const response = await fetch(
          `https://news-blog-website-production.up.railway.app/searchBlog/str?queryParam=${queryParam}`
        );
        console.log(response);
        if (!response.ok) {
          throw new Error("unable to fetch blog");
        }
        return response.json();
      } catch (error) {
        return error.message;
      }
    },
  });

  console.log(data);

  if (isLoading) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        Loading...
      </div>
    );
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  const categories = ["Politics", "Technology", "Education", "News"];
  const newIndex = Math.floor(Math.random() * 4);

  return (
    <div className="flex lg:flex-row flex-col justify-center lg:items-start items-center gap-16 py-20 ">
      <section className=" w-[90%] lg:w-[50%] grid grid-cols-2 grid-rows-auto gap-4">
        {data?.map((blog, index) => (
          <BlogCard key={blog._id} data={blog} isFirst={index === 0} />
        ))}
      </section>
      <Aside isBlog={false} category={categories[newIndex]} />
    </div>
  );
};

export default SearchedBlog;
