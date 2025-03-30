import api from "./api";

// Créer un statut
export const createStatus = async (statusData) => {
  return api.post("/createStatus", statusData);
};

// Récupérer tous les statuts
export const getAllStatuses = async () => {
  return api.get("/getAllStatuses");
};

// Récupérer un statut par ID
export const getStatusById = async (statusId) => {
  return api.get(`/getStatusById/${statusId}`);
};

// Mettre à jour un statut
export const updateStatus = async (statusId, statusData) => {
  return api.put(`/updateStatus/${statusId}`, statusData);
};

// Supprimer un statut
export const deleteStatus = async (statusId) => {
  return api.delete(`/deleteStatus/${statusId}`);
};
