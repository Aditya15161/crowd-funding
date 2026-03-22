const Project = require("../models/project");

exports.createProject = async (req, res) => {
  try {
    const {
      title,
      description,
      goal,
      amountRaised,
      deadline,
      category,
      imageUrl,
      owner,
    } = req.body;
    const project = new Project({
      title,
      description,
      goal,
      amountRaised,
      deadline,
      category,
      imageUrl,
      owner,
    });
    const savedProject = project.save();
    res.status(201).json({
      success: true,
      message: `Project saved successfully`,
    });
  } catch (err) {
    console.log("project controller error", err);
  }
};

exports.getProjects = async (req, res) => {
  try {
    const Projects = await Project.find();
    res.status(201).json({
      success: true,
      message: `Projects fetched successfully`,
      data: Projects,
    });
  } catch (err) {
    console.log("error while fetching projects", err);
  }
};

exports.getSpecficProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    res.status(201).json({
      success: true,
      message: `Project fetched successfully`,
      data: project,
    });
  } catch (err) {
    console.log("error while fetching project", err);
  }
};
