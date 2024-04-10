import express from "express";
import connectMongodb, {
  createNewBlog,
  deleteBlog,
  getBlogData,
  getBlogs,
  getCategoryBlogs,
  saveData,
} from "./dbConnection.js";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

connectMongodb();

//it will create a new document and returns id for the reference.
app.get("/newBlog", async (req, res) => {
  try {
    const id = await createNewBlog("Ashish Kumar Jain");
    res.send({ id });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.get("/:category", async (req, res) => {
  const category = req.params.category;
  try {
    const response = await getCategoryBlogs(category);
    res.send(response);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

//it will fetch blog using blogId
app.get("/getBlog/:blogId", async (req, res) => {
  const blogId = req.params.blogId;
  try {
    const response = await getBlogData(blogId);
    res.send(response);
  } catch (error) {
    
  }
});

//this will fetch published/draft blogs as per user requirement
app.get("/getBlogs/:status", async (req, res) => {
  try {
    const status = req.params.status;
    const blogs = await getBlogs(status);
    res.send(blogs);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

//this will update the changes made in blog in database
app.post("/:blogId/edit", async (req, res) => {
  try {
    const body = req.body;
    await saveData(body);
    res.sendStatus(200);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// to delete blog with given id
app.delete("/delete/:blogId", async (req, res) => {
  try {
    const blogId = req.params.blogId;
    const response = await deleteBlog(blogId);
    res.send(response);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
