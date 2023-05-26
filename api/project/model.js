// `Proje` modeli buraya
const db = require("../../data/dbConfig");

const getById = (id) => {
  return db("projects").where("project_id", id).first();
};

const getAll = () => {
  return db("projects");
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
