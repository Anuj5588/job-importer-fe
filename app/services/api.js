import axios from "axios";

const api = axios.create({
  baseURL: "https://job-importer-be.vercel.app"
});

export const runImport = () => api.post("/api/imports/run");

export const fetchImportHistory = () =>
  api.get("/api/imports/logs");

export default api;
