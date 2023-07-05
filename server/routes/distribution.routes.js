import express from 'express';
import {
    getDistributionStats,
    getDistributionStatById,
    createDistributionStat,
    updateDistributionStat,
    deleteDistributionStat,
} from '../controllers/distribution.js';

const router = express.Router();

router.get('/distribution-stats', getDistributionStats);
router.get('/distribution-stats/:id', getDistributionStatById);
router.post('/distribution-stats', createDistributionStat);
router.put('/distribution-stats/:id', updateDistributionStat);
router.delete('/distribution-stats/:id', deleteDistributionStat);

export default router;
