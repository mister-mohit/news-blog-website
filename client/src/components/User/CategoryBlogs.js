import { useParams } from "react-router-dom";
import BlogCard from "./BlogCard";
import { useQuery } from "@tanstack/react-query";

const CategoryBlogs = () => {
  const { category } = useParams();
  const { data, isLoading, error } = useQuery({
    queryKey: ["category", category],
    queryFn: async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/${category.toLowerCase()}`
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

  return (
    <div className="flex justify-center items-center">
      <section className=" w-[45%] grid grid-cols-2 grid-rows-auto gap-4">
        {data.map((blog, index) => (
          <BlogCard key={blog._id} data={blog} isFirst={index === 0} />
        ))}
      </section>
    </div>
  );
};

export default CategoryBlogs;
