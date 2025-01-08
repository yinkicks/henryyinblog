const Blog = require('../models/Blog');

// Get all blog posts
const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add a blog post
const addBlog = async (req, res) => {
  const { title, content } = req.body;

  try {
    const newBlog = new Blog({ title, content });
    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = { getBlogs, addBlog };
