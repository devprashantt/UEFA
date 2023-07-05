import express from 'express';
import {
    getDefendingStats,
    getDefendingStatById,
    createDefendingStat,
    updateDefendingStat,
    deleteDefendingStat,
} from '../controllers/defending.js';

const router = express.Router();

router.get('/defending-stats', getDefendingStats);
router.get('/defending-stats/:id', getDefendingStatById);
router.post('/defending-stats', createDefendingStat);
router.put('/defending-stats/:id', updateDefendingStat);
router.delete('/defending-stats/:id', deleteDefendingStat);

export default router;
