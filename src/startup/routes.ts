import express, { Application } from 'express';
import trainings from '../routes/trainings';
import error from '../middleware/error';

// Adding request body parsing and other features to a request pipeline
const routes = (app: Application) => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(express.static('public'));
    app.use('/api/trainings', trainings);
    app.use(error);
};
export default routes;