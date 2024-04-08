import upload from "../config/multerConfig.js";
import cloudinary from "../config/cloudinaryConfig.js";
import express from "express";

const router = express.Router();

router.post("/upload", upload.single("image"), async (req, res) => {
  
  try {
    console.log("hello");
    const result = await cloudinary.uploader.upload(req.file.path);
    console.log(result);
    res.json({ imageUrl: result.secure_url });
  } catch (error) {
    console.log("Error uploading image:", error.message);
    console.log("oh aithe aa");
    res.status(500).json({ error: "failed to upload image" });
  }
});

export default router;
