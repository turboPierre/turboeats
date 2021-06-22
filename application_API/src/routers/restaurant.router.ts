/**
 * Required External Modules and Interfaces
 */

import express from 'express';
import * as RestaurantController from '../controllers/restaurant.controller';

/**
 * Router Definition
 */

export const restaurantRouter = express.Router();


/**
 * Controller Definitions
 */

// GET restaurants/
restaurantRouter.get('/', RestaurantController.getAllRestaurants)

// GET restaurants/:id
restaurantRouter.get('/:id', RestaurantController.getOneRestaurant);

// POST restaurants/
restaurantRouter.post('/', RestaurantController.createRestaurant);

// PUT restaurants/:id
restaurantRouter.put('/:id', RestaurantController.updateRestaurant);

// DELETE restaurants/:id
restaurantRouter.delete('/:id', RestaurantController.deleteRestaurant);