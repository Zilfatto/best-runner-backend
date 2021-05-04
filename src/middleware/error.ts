import { ErrorRequestHandler } from 'express';

const error: ErrorRequestHandler = (err, req, res, next) => {
    const { errors } = err;
    if (errors) {
        return res.status(400).send(errors[Object.keys(errors)[0]].message);
    }
    console.error(err.message, err);
    return res.status(500).send('Something failed.');
}
export default error;