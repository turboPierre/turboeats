import * as dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';

import { userRouter } from './routers/user.router';
import {menuRouter} from './routers/menu.router';
import {productRouter} from './routers/product.router';
import {commandRouter} from './routers/command.router';
import {restaurantRouter} from './routers/restaurant.router';

import { errorHandler } from './middleware/error.middleware';
import { notFoundHandler } from './middleware/notFound.middleware';


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

app.use(cors());

app.use(express.json());

// Routes de l'API
app.use('/menus', menuRouter);
app.use('/products', productRouter);
app.use('/commands', commandRouter);
app.use('/restaurants', restaurantRouter);
app.use('/users', userRouter);

// Routes d'erreur, à laisser après les routes d'API
app.use(errorHandler);
app.use(notFoundHandler);

const server = app.listen(PORT, () => {
    console.log(`[Express] Listening on port ${PORT}`);
});
