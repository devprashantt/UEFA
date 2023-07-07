import axios from 'axios';

const goalsApi = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:3000",
});

export const getAllGoals = () => goalsApi.get(`/api/goals`);

