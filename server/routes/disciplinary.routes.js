import express from 'express';
import {
    getDisciplinaryStats,
    getDisciplinaryStatById,
    createDisciplinaryStat,
    updateDisciplinaryStat,
    deleteDisciplinaryStat,
} from '../controllers/disciplinary.js';

const router = express.Router();

router.get('/discipline-stats', getDisciplinaryStats);
router.get('/discipline-stats/:id', getDisciplinaryStatById);
router.post('/discipline-stats', createDisciplinaryStat);
router.put('/discipline-stats/:id', updateDisciplinaryStat);
router.delete('/discipline-stats/:id', deleteDisciplinaryStat);

export default router;
