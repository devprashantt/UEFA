import express from 'express';
import {
    getGoalKeepingStats,
    getGoalKeepingStatById,
    createGoalKeepingStat,
    updateGoalKeepingStat,
    deleteGoalKeepingStat,
} from '../controllers/goalkeeping.js';

const router = express.Router();

router.get('/goal-keeping-stats', getGoalKeepingStats);
router.get('/goal-keeping-stats/:id', getGoalKeepingStatById);
router.post('/goal-keeping-stats', createGoalKeepingStat);
router.put('/goal-keeping-stats/:id', updateGoalKeepingStat);
router.delete('/goal-keeping-stats/:id', deleteGoalKeepingStat);

export default router;
