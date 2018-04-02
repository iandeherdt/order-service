import * as express from 'express';
import * as bodyParser from 'body-parser';
import config from './config/main';
import routes from './routes';
import { defaultErrorHandler } from './lib/default-error.handler';
import * as mongoose from 'mongoose';

// init express
const app: express.Application = express();

app.use(bodyParser.json({ limit: config.bodyLimit }));
app.use(bodyParser.urlencoded({ extended: true, limit: config.bodyLimit }));

// routes
routes(app);

// Error handlers
app.use(defaultErrorHandler);

mongoose.connect(config.mongodb);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('connected to mongodb');
});

export default app;
