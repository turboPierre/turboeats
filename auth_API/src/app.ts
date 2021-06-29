/**
 * Required External Modules
 */


import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import testConnection from './config/sqlserv.config';

import { userRouter } from './routers/user.router';

import { errorHandler } from './middleware/error.middleware';
import { notFoundHandler } from './middleware/notFound.middleware';


dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
    process.exit(1);
}
console.log('started!');
const PORT: number = parseInt(process.env.PORT as string, 10);


const app = express();


/**
 *  App Configuration / Routes
 */

// App Configuration
app.use(helmet());

// TODO configurer avant le deploiement docker
const options: cors.CorsOptions = {
    allowedHeaders: [
        'Origin',
        'X-Requested-With',
        'Content-Type',
        'Accept',
        'X-Access-Token',
    ],
    credentials: true,
    methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
    origin: 'http://192.168.1.100:80',
    preflightContinue: false,
};

app.use(cors(options));
app.use(express.json());

// Routes de l'API
app.use('/users', userRouter);

// Routes d'erreur, à laisser après les routes d'API
app.use(errorHandler);
app.use(notFoundHandler);


/**
 * Server / DB Activation
 */

// Connexion à la base de donnée via Mongoose
testConnection();
const server = app.listen(PORT, () => {
    console.log(`[Express] Listening on port ${PORT}`);
});
