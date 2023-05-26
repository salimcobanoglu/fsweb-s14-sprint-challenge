// `/api/resources` router buraya
//  `/api/projects` router buraya
const router = require("express").Router();
const resourceModel = require("./model");

router.get("/", async (req, res) => {
  try {
    const resources = await resourceModel.getAll();
    res.json(resources);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: "An error occurred while retrieving the resources." });
  }
});

router.post("/", async (req, res) => {
  try {
    const resource = req.body;
    const createdResource = await resourceModel.create(resource);
    res.json(createdResource);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: "An error occurred while creating the resource." });
  }
});

module.exports = router;
