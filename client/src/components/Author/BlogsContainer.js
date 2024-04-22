import { useEffect } from "react";
import Blog from "./BlogDisplay";
import { useQuery } from "@tanstack/react-query";

const BlogsContainer = ({ isDraft }) => {
  const status = isDraft ? "draft" : "published";
  const { data, refetch, error, isLoading } = useQuery({
    queryKey: ["status", status],
    queryFn: async () => {
      const response = await fetch(
        `https://news-blog-website-production.up.railway.app/getBlogs/${status}`
      );
      if (!response) {
        throw new Error("Failed to fetch blog data");
      }
      return response.json();
    },
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    refetch();
  }, [status, refetch]);

  if (isLoading) {
    return (
      <div className=" bg-white h-full w-full rounded-lg overflow-auto flex justify-center items-center">
        Loading...
      </div>
    );
  }

  return (
    <div className=" bg-white h-full w-full rounded-lg overflow-auto">
      {data.map((blog) => (
        <Blog key={blog._id} blog={blog} />
      ))}
    </div>
  );
};

export default BlogsContainer;
