const express = require("express");
const router = express.Router();

const {
  createProject,
  getProjects,
  getSpecficProject,
} = require("../controllers/projectController");

router.post("/create-project", createProject);

router.get("/get-projects", getProjects);

router.get("/:id", getSpecficProject);

module.exports = router;
