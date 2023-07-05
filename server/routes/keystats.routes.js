import express from 'express';
import {
    getKeyStats,
    getKeyStatById,
    createKeyStat,
    updateKeyStat,
    deleteKeyStat,
} from '../controllers/keystats.js';

const router = express.Router();

router.get('/key-stats', getKeyStats);
router.get('/key-stats/:id', getKeyStatById);
router.post('/key-stats', createKeyStat);
router.put('/key-stats/:id', updateKeyStat);
router.delete('/key-stats/:id', deleteKeyStat);

export default router;
