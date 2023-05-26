// bu`Task` modeli buraya
const db = require("../../data/dbConfig");

const getById = (id) => {
  return db("tasks").where("task_id", id).first();
};

const create = async (task) => {
  const inserted = await db("tasks").insert(task);
  return getById(inserted[0]);
};

const getAll = async () => {
  const tasks = await db("tasks")
    .select(
      "tasks.task_id",
      "tasks.task_description",
      "tasks.task_notes",
      "tasks.task_completed",
      "projects.project_name",
      "projects.project_description"
    )
    .join("projects", "tasks.project_id", "projects.project_id");

  let updatedTasks = tasks.map((task) =>
    task.task_completed === 0
      ? { ...task, task_completed: false }
      : { ...task, task_completed: true }
  );

  return updatedTasks;
};

module.exports = {
  create,
  getAll,
  getById,
};
