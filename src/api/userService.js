import api from "./api";

// Créer un utilisateur
export const createUser = async (userData) => {
  return api.post("/createUser", userData);
};

// Récupérer tous les utilisateurs
export const getAllUsers = async () => {
  return api.get("/getAllUsers");
};

// Récupérer un utilisateur par ID
export const getUserById = async (userId) => {
  return api.get(`/getUserById/${userId}`);
};

// Mettre à jour un utilisateur
export const updateUser = async (userId, userData) => {
  return api.put(`/updateUser/${userId}`, userData);
};

// Supprimer un utilisateur
export const deleteUser = async (userId) => {
  return api.delete(`/deleteUser/${userId}`);
};
