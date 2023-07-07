import axios from 'axios';

const disciplineApi = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:3000",
});

export const getAllDiscipline = () => disciplineApi.get(`/api/discipline-stats`);

