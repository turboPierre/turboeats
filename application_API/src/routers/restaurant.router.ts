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
//  @Unused
// restaurantRouter.get('/:id', RestaurantController.getOneRestaurant);

// GET restaurants/userRestaurant
restaurantRouter.get('/userRestaurant',AuthMiddleware.userAuth, RestaurantController.getUserRestaurant);

// POST restaurants/
restaurantRouter.post('/', AuthMiddleware.userAuth,  RestaurantController.createRestaurant);

// PUT restaurants/:id
restaurantRouter.put('/:id',AuthMiddleware.userAuth, RestaurantController.updateRestaurant);

// DELETE restaurants/:id
restaurantRouter.delete('/:id',AuthMiddleware.userAuth, RestaurantController.deleteRestaurant);