// `Proje` modeli buraya
const db = require("../../data/dbConfig");
const { testing } = require("../../knexfile");

const getById = async (id) => {
  const project = await db("projects").where("project_id", id).first();
  let updatedProject =
    project.project_completed === 0
      ? { ...project, project_completed: false }
      : { ...project, project_completed: true };

  return updatedProject;
};

const getAll = async () => {
  const projects = await db("projects");
  let updatedProjects = projects.map((project) =>
    project.project_completed === 0
      ? { ...project, project_completed: false }
      : { ...project, project_completed: true }
  );

  return updatedProjects;
};

const create = async (project) => {
  const inserted = await db("projects").insert(project);
  return getById(inserted[0]);
};

module.exports = {
  create,
  getAll,
  getById,
};
