import express from 'express';
import {
    getGoals,
    getGoalById,
    createGoal,
    updateGoal,
    deleteGoal,
} from '../controllers/goals.js';

const router = express.Router();

router.get('/goals', getGoals);
router.get('/goals/:id', getGoalById);
router.post('/goals', createGoal);
router.put('/goals/:id', updateGoal);
router.delete('/goals/:id', deleteGoal);

export default router;
