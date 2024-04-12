import { useQuery } from "@tanstack/react-query";
import ShortBlogCard from "./ShortBlogCard";

const RelatedBlogs = ({ isBlog, category, blogId }) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["category", category],
    queryFn: async () => {
      const response = await fetch(`http://localhost:5000/${category.toLowerCase()}`);
      if (!response.ok) {
        throw new Error("unable to fetch blogs");
      }
      return response.json();
    },
  });

  if (isLoading) {
    <div>Loading...</div>;
  }

  if (error) {
    <div>{error.message}</div>;
  }

  return (
    <div className="flex flex-col gap-4" >
      <h2 className="border-[#c57eef] border-l-[6px]  rounded-md p-1">
        {isBlog ? "Related Blogs" : `${category}`}
      </h2>
      <div>
        <div className="flex flex-col gap-4">
          {data?.map((blog) => {
            if (blog._id === blogId) return null; 
            return <ShortBlogCard key={blog._id} blogData={blog} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default RelatedBlogs;
