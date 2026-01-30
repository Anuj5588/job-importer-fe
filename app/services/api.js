import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000"
});

export const runImport = () => api.post("/api/imports/run");

export const fetchImportHistory = () =>
  api.get("/api/imports/logs");

export default api;
