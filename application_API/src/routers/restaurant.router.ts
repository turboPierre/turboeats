/**
 * Required External Modules and Interfaces
 */

import express from 'express';
import * as RestaurantController from '../controllers/restaurant.controller';
import * as AuthMiddleware from '../middleware/auth';

/**
 * Router Definition
 */

export const restaurantRouter = express.Router();


/**
 * Controller Definitions
 */

// GET restaurants/
restaurantRouter.get('/', RestaurantController.getAllRestaurants);

// GET restaurants/:id
restaurantRouter.get('/:id', RestaurantController.getOneRestaurant);

// POST restaurants/
restaurantRouter.post('/', RestaurantController.createRestaurant);

// PUT restaurants/:id
restaurantRouter.put('/:id',AuthMiddleware.userAuth, RestaurantController.updateRestaurant);

// DELETE restaurants/:id
restaurantRouter.delete('/:id',AuthMiddleware.userAuth, RestaurantController.deleteRestaurant);