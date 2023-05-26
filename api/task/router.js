// `/api/tasks` router buraya
const router = require("express").Router();
const taskModel = require("./model");

router.get("/", async (req, res) => {
  try {
    const tasks = await taskModel.getAll();
    res.json(tasks);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: "An error occurred while retrieving the resources." });
  }
});

router.post("/", async (req, res) => {
  try {
    const task = req.body;
    const createdTask = await taskModel.create(task);
    res.json(createdTask);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: "An error occurred while creating the resource." });
  }
});

module.exports = router;
