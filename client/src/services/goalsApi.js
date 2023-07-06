import axios from 'axios';

const goalsApi = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
});

export const getAllGoals = () => goalsApi.get(`/api/goals`);

