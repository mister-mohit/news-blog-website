import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectMongodb = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("database connected successfully");
  } catch (error) {
    console.log("error connecting database", error.message);
  }
};

const blogSchema = new mongoose.Schema({
  author: String,
  createdAt: Date,
  title: String,
  content: String,
  category: String,
  imageAdd: String,
  status: String,
});

async function deleteAll() {
  try {
    await Blog.deleteMany({});
    console.log("delted successfully");
  } catch (error) {
    console.log("error in deleting", error.message);
  }
}

const Blog = new mongoose.model("Blog", blogSchema);

const createNewBlog = async (newAuthor) => {
  //deleteAll();
  const newBlog = new Blog({
    author: newAuthor,
    createdAt: null,
    title: "",
    content: "",
    category: "",
    imageAdd: "",
    status: "",
  });

  try {
    const response = await newBlog.save();
    return response._id;
  } catch (error) {
    console.log("error in deleting", error.message);
    throw error;
  }
};

const getBlogData = async (blogId) => {
  try {
    const blog = await Blog.findById(blogId);
    return blog;
  } catch (error) {
    console.log("error : ", error.message);
    throw error;
  }
};

const getBlogs = async (status) => {
  try {
    const blogStatus = status;
    const blogs = await Blog.find({ status: blogStatus }).limit(50);
    return blogs;
  } catch (error) {
    console.log("error : ", error.message);
    throw error;
  }
};

const saveData = async (body) => {
  try {
    const newBlog = new Blog(body);
    await Blog.findByIdAndUpdate(body._id, body);
  } catch (error) {
    console.log("error in saving data");
    throw error;
  }
};

const deleteBlog = async (blogId) => {
  try {
    const response = await Blog.findByIdAndDelete(blogId);
    return response;
  } catch (error) {
    console.log("error in deleting blog", error.message);
    throw error;
  }
};

export { createNewBlog, getBlogData, saveData, deleteBlog, getBlogs };
export default connectMongodb;
