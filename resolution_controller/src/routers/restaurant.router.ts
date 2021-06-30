/**
 * Required External Modules and Interfaces
 */

import express from 'express';
import * as RestaurantController from '../controllers/restaurant.controller';

export const restaurantRouter = express.Router();

// GET restaurants/
restaurantRouter.get('/', RestaurantController.getAllRestaurants);

// GET restaurants/userRestaurant
restaurantRouter.get('/userRestaurant',RestaurantController.getUserRestaurant);

// POST restaurants/
restaurantRouter.post('/', RestaurantController.createRestaurant);

// PUT restaurants/:id
restaurantRouter.put('/:id', RestaurantController.updateRestaurant);


// DELETE restaurants/:id
restaurantRouter.delete('/:id', RestaurantController.deleteRestaurant);