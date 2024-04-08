import { useState } from "react";
import BlogsContainer from "../../components/Author/BlogsContainer";
import MenuDrawer from "../../components/Author/MenuDrawer";

const AuthorHome = () => {
  const [isDraft, setIsDraft] = useState(false);
  console.log(isDraft, "hello draft");

  return (
    <div className="bg-[#FBF3D5] h-screen flex py-4 gap-4">
      <MenuDrawer setIsDraft={setIsDraft} isDraft={isDraft} />
      <BlogsContainer isDraft={isDraft} />
    </div>
  );
};

export default AuthorHome;
