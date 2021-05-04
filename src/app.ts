import express from 'express';
import routes from './startup/routes';

const app = express();

// App initialization
routes(app);

const port = process.env.PORT || 3000;
const server = app.listen(port, () => console.info(`Listening on port ${port}...`));

module.exports = server;
