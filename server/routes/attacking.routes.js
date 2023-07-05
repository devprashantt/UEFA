import express from 'express';
import { getAttackingStats, getAttackingStatById, createAttackingStat, updateAttackingStat, deleteAttackingStat } from '../controllers/attacking.js';

const router = express.Router();

router.get('/attacking-stats', getAttackingStats);
router.get('/attacking-stats/:id', getAttackingStatById);
router.post('/attacking-stats', createAttackingStat);
router.put('/attacking-stats/:id', updateAttackingStat);
router.delete('/attacking-stats/:id', deleteAttackingStat);

export default router;
