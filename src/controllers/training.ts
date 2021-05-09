import { RequestHandler } from 'express';
import { Training, validateTraining } from '../models/training';
import { notFoundTrainingResponse } from '../utils/trainings';
import { badRequest } from '../utils/common';

const TRAININGS: Training[] = [];

export const createTraining: RequestHandler = (req, res, next) => {
    const { distanceInKM, date, workoutType, comment } = req.body as Partial<Training>;

    // Validate an incoming request data for training
    const { error } = validateTraining({ distanceInKM, date, workoutType, comment });
    if (error) {
        return badRequest(res, error.details[0].message);
    }

    // Create a new training
    const newTraining = new Training(Date.now(), distanceInKM!, date!, workoutType!, comment!);

    // Add created training to the DB emulator
    TRAININGS.push(newTraining);
    res.send(newTraining);
};

export const getTrainings: RequestHandler = (req, res, next) => {
    res.send(TRAININGS);
};

export const getTraining: RequestHandler<{ id: number | string }> = (req, res, next) => {
    const trainingId = Number(req.params.id);
    const training = TRAININGS.find(training => training.id === trainingId);

    // Response for not existing training
    if (!training) {
        return notFoundTrainingResponse(res);
    }

    res.send(training);
};

export const updateTraining: RequestHandler<{ id: number | string }> = (req, res, next) => {
    const trainingId = Number(req.params.id);
    const { distanceInKM, date, workoutType, comment } = req.body as Partial<Training>;
    const training = TRAININGS.find(training => training.id === trainingId);

    // Response for not existing training
    if (!training) {
        return notFoundTrainingResponse(res);
    }

    // Validate new data for a training
    const { error } = validateTraining({ distanceInKM, date, workoutType, comment });
    if (error) {
        return badRequest(res, error.details[0].message);
    }

    // Update training data
    training.distanceInKM = distanceInKM!;
    training.date = date!;
    training.workoutType = workoutType!;
    training.comment = comment!;

    res.send(training);
};

export const deleteTraining: RequestHandler<{ id: number | string }> = (req, res, next) => {
    const trainingId = Number(req.params.id);
    const trainingIndex = TRAININGS.findIndex(training => training.id === trainingId);

    // Response for not existing training
    if (trainingIndex === -1) {
        return notFoundTrainingResponse(res);
    }

    // Delete a specified training
    TRAININGS.splice(trainingIndex, 1);

    res.send({id: trainingId});
};