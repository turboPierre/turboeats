import * as dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';

import { errorHandler } from './middleware/error.middleware';
import { notFoundHandler } from './middleware/notFound.middleware';

import {router} from './routers/router';

dotenv.config();

if (!process.env.PORT) {
    process.exit(1);
}
console.log('started!');
const PORT: number = parseInt(process.env.PORT as string, 10);


const app = express();
app.use(express.static('public'));

// App Configuration
app.use(helmet());

const corsOptions = {
    origin: 'http://localhost',
}
app.use(cors(corsOptions));

app.use(express.json());

// Routes de l'API
app.use('/', router);

// Routes d'erreur, à laisser après les routes d'API
app.use(errorHandler);
app.use(notFoundHandler);
