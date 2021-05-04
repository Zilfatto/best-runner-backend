import Joi from 'joi';
import trainings from '../routes/trainings';

export class Training {
    constructor(
        public id: number|string,
        public distance: number,
        public date: string,
        public workoutType: string,
        public comment: string
    ) {}
}

// For validating request data before creating or updating a training
export function validateTraining(training: Partial<Training>) {
    const schema = Joi.object({
        distance: Joi.string().min(0.001).required(),
        date: Joi.date().required(),
        workoutType: Joi.string().required(),
        comment: Joi.string().required()
    });
    // Return validation result
    return schema.validate(training);
}