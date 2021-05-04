import { RequestHandler } from 'express';
import { Training } from '../models/training';

const TRAININGS: Training[] = [];

export const createTraining: RequestHandler = (req, res, next) => {
    const { distance, date, workoutType, comment } = (req.body as { distance: number, date: string, workoutType: string, comment: string });
    const newTraining = new Training(Date.now(), distance, date, workoutType, comment);

    TRAININGS.push(newTraining);

    res.status(201).json({ message: 'Created the todo.', createdTraining: newTraining });
};

export const getTrainings: RequestHandler = (req, res, next) => {
    res.json({ trainings: TRAININGS });
};

export const getTraining: RequestHandler<{ id: number | string }> = (req, res, next) => {

};

export const updateTraining: RequestHandler<{ id: number | string }> = (req, res, next) => {
    const trainingId = req.params.id;

    const updatedTraining = req.body as { distance: number, date: string, workoutType: string, comment: string };

    let trainingIndex = TRAININGS.findIndex(training => training.id === trainingId);

    if (trainingIndex === -1) {
        return res.status(404).send('Could not find a training');
    }

    TRAININGS[trainingIndex] = new Training(TRAININGS[trainingIndex].id, updatedTraining.distance, updatedTraining.date, updatedTraining.workoutType, updatedTraining.comment);

    res.json({ message: 'Updated!', updatedTraining: TRAININGS[trainingIndex] });
};

export const deleteTraining: RequestHandler<{ id: number | string }> = (req, res, next) => {
    const trainingId = req.params.id;

    const trainingIndex = TRAININGS.findIndex(training => training.id === trainingId);

    if (trainingIndex === -1) {
        return res.status(404).send('Could not find a training');
    }

    TRAININGS.splice(trainingIndex, 1);

    res.json({ message: 'Training deleted!' });
};