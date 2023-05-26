//  `/api/projects` router buraya
const router = require("express").Router();
const projectModel = require("./model");

router.get("/", async (req, res) => {
  try {
    const projects = await projectModel.getAll();
    res.json(projects);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: "An error occurred while retrieving the resources." });
  }
});

router.post("/", async (req, res) => {
  try {
    const project = req.body;
    const createdProject = await projectModel.create(project);
    res.json(createdProject);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: "An error occurred while creating the resource." });
  }
});

module.exports = router;
