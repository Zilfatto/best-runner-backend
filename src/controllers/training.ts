import { RequestHandler } from 'express';
import { Training } from '../models/training';
import { notFoundTrainingResponse } from '../utils/trainings';

const TRAININGS: Training[] = [];

export const createTraining: RequestHandler = (req, res, next) => {
    const { distance, date, workoutType, comment } = (req.body as { distance: number, date: string, workoutType: string, comment: string });
    const newTraining = new Training(Date.now(), distance, date, workoutType, comment);

    // Add created training to the DB emulator
    TRAININGS.push(newTraining);
    res.send(newTraining);
};

export const getTrainings: RequestHandler = (req, res, next) => {
    res.send(TRAININGS);
};

export const getTraining: RequestHandler<{ id: number | string }> = (req, res, next) => {
    const trainingId = req.params.id;
    const training = TRAININGS.find(training => training.id === trainingId);

    // Response for not existing training
    if (!training) {
        return notFoundTrainingResponse(res);
    }

    res.send(training);
};

export const updateTraining: RequestHandler<{ id: number | string }> = (req, res, next) => {
    const trainingId = req.params.id;
    const newTrainingData = req.body as { distance: number, date: string, workoutType: string, comment: string };
    const training = TRAININGS.find(training => training.id === trainingId);

    // Response for not existing training
    if (!training) {
        return notFoundTrainingResponse(res);
    }

    // Update training data
    training.distance = newTrainingData.distance;
    training.date = newTrainingData.date;
    training.workoutType = newTrainingData.workoutType;
    training.comment = newTrainingData.comment;

    res.send(training);
};

export const deleteTraining: RequestHandler<{ id: number | string }> = (req, res, next) => {
    const trainingId = req.params.id;
    const trainingIndex = TRAININGS.findIndex(training => training.id === trainingId);

    // Response for not existing training
    if (trainingIndex === -1) {
        return notFoundTrainingResponse(res);
    }

    // Delete a specified training
    TRAININGS.splice(trainingIndex, 1);

    res.json({ message: 'Training deleted!' });
};