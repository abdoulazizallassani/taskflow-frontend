import api from "./api";

// Créer une tâche
export const createTask = async (taskData) => {
  return api.post("/createTask", taskData);
};

// Récupérer toutes les tâches
export const getAllTasks = async () => {
  return api.get("/getAllTasks");
};

// Récupérer une tâche par ID
export const getTaskById = async (taskId) => {
  return api.get(`/getTaskById/${taskId}`);
};

// Mettre à jour une tâche
export const updateTask = async (taskId, taskData) => {
  return api.put(`/updateTask/${taskId}`, taskData);
};

// Supprimer une tâche
export const deleteTask = async (taskId) => {
  return api.delete(`/deleteTask/${taskId}`);
};
