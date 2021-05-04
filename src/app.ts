import express from 'express';
import trainingsRouter from './routes/trainings';
import error from './middleware/error';

const app = express();

app.use('/api/trainings', trainingsRouter);
app.use(error);

const port = process.env.PORT || 3000;
const server = app.listen(port, () => console.info(`Listening on port ${port}...`));

module.exports = server;
