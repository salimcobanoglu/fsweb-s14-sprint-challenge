// bu`Task` modeli buraya
const db = require("../db/connection");

const getById = (id) => {
  return db("projects").where("task_id", id).first();
};

const create = async (task) => {
  const inserted = await db("tasks").insert(task);
  return getById(inserted[0]);
};

const getAll = () => {
  return db("tasks")
    .select(
      "tasks.task_id",
      "tasks.task_description",
      "tasks.task_notes",
      "tasks.task_completed",
      "projects.project_name",
      "projects.project_description"
    )
    .join("projects", "tasks.project_id", "projects.project_id");
};

module.exports = {
  create,
  getAll,
  getById,
};
