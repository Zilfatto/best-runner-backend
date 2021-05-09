import express from 'express';
import routes from './startup/routes';

const app = express();

// App initialization
routes(app);

const port = process.env.PORT || 5000;
app.listen(port, () => console.info(`Listening on port ${port}...`));