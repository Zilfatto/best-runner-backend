import { Response } from 'express';

// Function for returning a bad request error
export function badRequest(res: Response, error: string) {
    return res.status(400).send(error);
}