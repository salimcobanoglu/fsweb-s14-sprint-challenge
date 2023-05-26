// `Resource` modeli buraya
const db = require("../../data/dbConfig");

const getById = (id) => {
  return db("resources").where("resource_id", id).first();
};

const getAll = () => {
  return db("resources");
};

const create = async (resource) => {
  const inserted = await db("resources").insert(resource);
  return getById(inserted[0]);
};

module.exports = {
  create,
  getAll,
  getById,
};
