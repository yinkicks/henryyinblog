const express = require('express');
const { getBlogs, addBlog } = require('../controllers/blogController');
const router = express.Router();

router.get('/', getBlogs);
router.post('/', addBlog);

module.exports = router;


// Update a Blog Post
router.put('/:id', async (req, res) => {
    try {
      const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(updatedBlog);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  
  // Delete a Blog Post
  router.delete('/:id', async (req, res) => {
    try {
      await Blog.findByIdAndDelete(req.params.id);
      res.json({ message: 'Blog post deleted' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });