/**
 * Required External Modules and Interfaces
 */

import express from 'express';
import * as RestaurantController from '../controllers/restaurant.controller';
import * as AuthMiddleware from '../../../resolution_controller/src/middleware/auth';

export const restaurantRouter = express.Router();

// GET restaurants/
restaurantRouter.get('/', RestaurantController.getAllRestaurants);

// GET restaurants/userRestaurant
restaurantRouter.get('/userRestaurant',AuthMiddleware.userAuth, RestaurantController.getUserRestaurant);

// GET restaurants/:id
restaurantRouter.get('/id=:id', RestaurantController.getOneRestaurant);

// POST restaurants/
restaurantRouter.post('/',AuthMiddleware.userAuth, RestaurantController.createRestaurant);

// PUT restaurants/:id
restaurantRouter.put('/:id',AuthMiddleware.userAuth, RestaurantController.updateRestaurant);

// DELETE restaurants/:id
restaurantRouter.delete('/:id',AuthMiddleware.userAuth, RestaurantController.deleteRestaurant);