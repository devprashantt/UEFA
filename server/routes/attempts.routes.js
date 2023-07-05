import express from 'express';
import {
    getAttempts,
    getAttemptById,
    createAttempt,
    updateAttempt,
    deleteAttempt,
} from '../controllers/attempts.js';

const router = express.Router();

router.get('/attempts', getAttempts);
router.get('/attempts/:id', getAttemptById);
router.post('/attempts', createAttempt);
router.put('/attempts/:id', updateAttempt);
router.delete('/attempts/:id', deleteAttempt);

export default router;
