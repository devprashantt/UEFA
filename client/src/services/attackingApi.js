import axios from 'axios';

const attackingApi = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:3000",
});

export const getAllAttacking = () => attackingApi.get(`/api/attacking-stats`);

