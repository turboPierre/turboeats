/**
 * Required External Modules
 */


import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import connect from './config/mongoose.config';

import { errorHandler } from './middleware/error.middleware';
import { notFoundHandler } from './middleware/notFound.middleware';

import {menuRouter} from './routers/menu.router';
import {productRouter} from './routers/product.router';
import {commandRouter} from './routers/command.router';
import {restaurantRouter} from './routers/restaurant.router';




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

const corsOptions = {
    origin: 'http://localhost',
}
app.use(cors(corsOptions));

app.use(express.json());

// Routes de l'API
app.use('/menus', menuRouter);
app.use('/products', productRouter);
app.use('/commands', commandRouter);
app.use('/restaurants', restaurantRouter);

// Routes d'erreur, à laisser après les routes d'API
app.use(errorHandler);
app.use(notFoundHandler);


/**
 * Server / DB Activation
 */

// Connexion à la base de donnée via Mongoose
connect();
const server = app.listen(PORT, () => {
    console.log(`[Express] Listening on port ${PORT}`);
});
