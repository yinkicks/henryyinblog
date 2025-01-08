const Project = require('../models/Project');

// Get all projects
const getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add a project
const addProject = async (req, res) => {
  const { title, description, image, link } = req.body;

  try {
    const newProject = new Project({ title, description, image, link });
    await newProject.save();
    res.status(201).json(newProject);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = { getProjects, addProject };
