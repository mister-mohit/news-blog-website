import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import BlogCard from "./BlogCard";

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

  const dataSubArr = data?.slice(1);

  if (isLoading) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        Loading...
      </div>
    );
  }
  return (
    <div>
      <div className="flex justify-center items-center">
        <section className=" w-[60%] flex flex-wrap justify-center gap-4">
          {dataSubArr.map((blog) => (
            <BlogCard key={blog._id} data={blog} />
          ))}
        </section>
        <aside></aside>
      </div>
    </div>
  );
};

export default CategoryBlogs;
