import { useParams } from "react-router-dom";
import BlogCard from "./BlogCard";
import { useQuery } from "@tanstack/react-query";
import Aside from "./Aside";

const CategoryBlogs = () => {
  const { category } = useParams();
  const { data, isLoading, error } = useQuery({
    queryKey: ["category", category],
    queryFn: async () => {
      try {
        const response = await fetch(
          `https://news-blog-website-production.up.railway.app/${category.toLowerCase()}`
        );

        return response.json();
      } catch (error) {
        return error.message;
      }
    },
  });

  if (isLoading) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        Loading...
      </div>
    );
  }

  const categories = ["Politics", "Technology", "Education", "News"];
  const index = categories.indexOf(category);
  const newIndex = (index + 1) % categories.length;

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

export default CategoryBlogs;
