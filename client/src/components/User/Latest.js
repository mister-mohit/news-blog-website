import { useQuery } from "@tanstack/react-query";
import ShortBlogCard from "./ShortBlogCard";

const Latest = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["latest"],
    queryFn: async () => {
      const response = await fetch("http://localhost:5000/getLatestBlogs");
      if (!response.ok) {
        throw new Error("unable to fetch blog");
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
    <div className="flex flex-col gap-4 ">
      <h2 className="bg-[#c57eef]  w-1/2 text-white font-medium  rounded-md px-4 py-4 text-center">
        Latest blogs
      </h2>
      <div className="flex flex-col gap-4">
        {data?.map((blog) => (
          <ShortBlogCard key={blog._id} blogData={blog} />
        ))}
      </div>
    </div>
  );
};

export default Latest;
