import { Response } from 'express';

// Function for sending not found response in training controller
export function notFoundTrainingResponse(res: Response) {
    return res.status(404).send('Training with the given ID was not found!');
}