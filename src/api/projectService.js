import api from "./api";

// Créer un projet
export const createProject = async (projectData) => {
  return api.post("/createProject", projectData);
};

// Récupérer tous les projets
export const getAllProjects = async () => {
  return api.get("/getAllProjects");
};

// Récupérer un projet par ID
export const getProjectById = async (projectId) => {
  return api.get(`/getProjectById/${projectId}`);
};

// Mettre à jour un projet
export const updateProject = async (projectId, projectData) => {
  return api.put(`/updateProject/${projectId}`, projectData);
};

// Supprimer un projet
export const deleteProject = async (projectId) => {
  return api.delete(`/deleteProject/${projectId}`);
};
