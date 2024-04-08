import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const useCustomQuery = (blogId) => {
  const navigate = useNavigate();
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["blog", blogId],
    queryFn: async () => {
      const response = await fetch(`http://localhost:5000/getBlog/${blogId}`);
      if (!response) {
        throw new Error("Failed to fetch blog data");
      }
      return response.json();
    },
    refetchOnWindowFocus: false,
  });

  const [blog, setBlog] = useState(data?.blogData || null);
  const [isNavigate, setIsNavigate] = useState(false);

  useEffect(() => {
    if (data) {
      setBlog(data.blogData);
    }
    
  }, [data]);

  const handleChange = (value, tag) => {
    switch (tag) {
      case "heading":
        setBlog((prevVal) => ({ ...prevVal, title: value }));
        break;
      case "content":
        setBlog((prevVal) => ({ ...prevVal, content: value }));
        break;
      case "img":
        setBlog((prevVal) => ({ ...prevVal, imageAdd: value }));
        break;
      case "category":
        setBlog((prevVal) => ({ ...prevVal, category: value }));
        break;
      case "publish":
        setBlog((prevVal) => ({ ...prevVal, status: "published" }));
        setIsNavigate(prevVal => !prevVal)
        alert("published successfully");
        break;
      case "draft":
        setBlog((prevVal) => ({ ...prevVal, status: "draft" }));
        setIsNavigate(prevVal => !prevVal)
        alert("blog drafted successfully");
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const saveChanges = () => {
      fetch(`http://localhost:5000/${blogId}/edit`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blog),
      })
        .then((response) => {
          console.log("success");
        })
        .catch((error) => {
          console.log(error.message);
        });
    };
    blog && saveChanges();
    if(blog && isNavigate){
      navigate("/author")
    }
  }, [blog, blogId, data, navigate, isNavigate]);

  return [isLoading, isError, data?.blogData, error, blog, handleChange];
};

export default useCustomQuery;
