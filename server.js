import express from 'express';
import mustacheExpress from 'mustache-express';
import bodyParser from 'body-parser';
import { log } from 'node:console';

import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

import enterNameRoute from './routes/enterName.js';
import displayNameRoute from './routes/displayName.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();


app.set('views', `${__dirname}/views`);
app.set('view engine', 'mustache');
app.engine('mustache', mustacheExpress());

app.use(bodyParser.urlencoded({extended: true}));

app.use('/', enterNameRoute);
app.use('/', displayNameRoute);

app.listen(3000, () => log("Server started!"));

