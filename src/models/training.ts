import Joi from 'joi';

export class Training {
    constructor(
        public id: number|string,
        public distanceInKM: number,
        public date: string,
        public workoutType: string,
        public comment?: string
    ) {}
}

// For validating request data before creating or updating a training
export function validateTraining(training: Partial<Training>) {
    const schema = Joi.object({
        distanceInKM: Joi.number().positive().precision(1).required(),
        date: Joi.date().required(),
        workoutType: Joi.string().required(),
        comment: Joi.optional()
    });
    // Return validation result
    return schema.validate(training);
}