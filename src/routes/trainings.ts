import { Router } from 'express';
import {
    getTraining,
    getTrainings,
    createTraining,
    updateTraining,
    deleteTraining
} from '../controllers/training';

const router = Router();

// CRUD operations for trainings
router.get('/', getTrainings);
router.get('/:id', getTraining);
router.post('/', createTraining);
router.put('/:id', updateTraining);
router.delete('/:id', deleteTraining);
export default router;