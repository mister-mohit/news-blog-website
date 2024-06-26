import Latest from "./Latest"
import RelatedBlogs from "./RelatedBlogs"

const Aside = ({isBlog, category, blogId}) => {
  return (
    <div className="flex flex-col gap-16 lg:w-fit w-[90%] " >
        <Latest />
        <RelatedBlogs isBlog={isBlog} blogId={blogId} category={category}  />
    </div>
  )
}

export default Aside
