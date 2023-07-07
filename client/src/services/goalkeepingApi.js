import axios from 'axios';

const goalkeepingApi = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:3000",
});

export const getAllGoalkeeping = () => goalkeepingApi.get(`/api/goal-keeping-stats`);

