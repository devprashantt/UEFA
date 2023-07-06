import axios from 'axios';

const defendingApi = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
});

export const getAllDefending = () => defendingApi.get(`/api/defending-stats`);

