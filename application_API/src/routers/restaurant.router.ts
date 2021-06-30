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

/**
 * @api {get} /Restaurant/ GET Restaurant information
 * @apiName GetRestaurant
 * @apiGroup Restaurant
 * @apiVersion 0.1.0
 *
 * @apiParam {Number} id Restaurant unique ID.
 *
 * @apiSuccess {String} name  Name of the Restaurant.
 * @apiSuccess {String} describe  Describe of the Restaurant.
 * @apiSuccess {String} picture  Link url tothe picture of the Restaurant.
 * @apiSuccess {String} address Address of the Restaurant.
 * @apiSuccess {String} phone Phone of the Restaurant.
 * @apiSuccess {Number} open_hour  Hour open of the Restaurant.
 * @apiSuccess {Number} close_hour  Hour close of the Restaurant.
 * @apiSuccess {String} open_days Days open of the Restaurant.
 * 
 *
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 200 OK
 *      {
 *          "id": "123",
 *          "name": "Restaurant Name",
 *          "describe": "Description of the Restaurant",
 *          "picture": "http://exemple.com",
 *          "address": "Restaurant Address 123 road of exemple",
 *          "phone": "1234",
 *          "open_hour": "12",
 *          "close_hour": "24",
 *          "open_days": "all the days",
 *      }
 *
 * @apiError RestaurantNotFound The id of the Restaurant was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Restaurant Error"
 *     }
 */


// GET restaurants/
restaurantRouter.get('/', RestaurantController.getAllRestaurants);

/**
 * @api {get} /Restaurant/:id GET unique Restaurant information
 * @apiName GetRestaurant
 * @apiGroup Restaurant
 * @apiVersion 0.1.0
 *
 * @apiParam {Number} id Restaurant unique ID.
 *
 * @apiSuccess {String} name  Name of the Restaurant.
 * @apiSuccess {String} describe  Describe of the Restaurant.
 * @apiSuccess {String} picture  Link url tothe picture of the Restaurant.
 * @apiSuccess {String} address Address of the Restaurant.
 * @apiSuccess {String} phone Phone of the Restaurant.
 * @apiSuccess {Number} open_hour  Hour open of the Restaurant.
 * @apiSuccess {Number} close_hour  Hour close of the Restaurant.
 * @apiSuccess {String} open_days Days open of the Restaurant.
 * 
 *
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 200 OK
 *      {
 *          "id": "123",
 *          "name": "Restaurant Name",
 *          "describe": "Description of the Restaurant",
 *          "picture": "http://exemple.com",
 *          "address": "Restaurant Address 123 road of exemple",
 *          "phone": "1234",
 *          "open_hour": "12",
 *          "close_hour": "24",
 *          "open_days": "all the days",
 *      }
 *
 * @apiError RestaurantNotFound The id of the Restaurant was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Restaurant Error"
 *     }
 */

// GET restaurants/:id
restaurantRouter.get('/:id', RestaurantController.getOneRestaurant);

// GET restaurants/userRestaurant
restaurantRouter.get('/userRestaurant',AuthMiddleware.userAuth, RestaurantController.getUserRestaurant);

/**
 * @api {post} /Restaurant/ POST Restaurant information
 * @apiName PostRestaurant
 * @apiGroup Restaurant
 * @apiVersion 0.1.0
 *
 * @apiParam {Number} id Restaurant unique ID.
 *
 * @apiSuccess {String} name  Name of the Restaurant.
 * @apiSuccess {String} describe  Describe of the Restaurant.
 * @apiSuccess {String} picture  Link url tothe picture of the Restaurant.
 * @apiSuccess {String} address Address of the Restaurant.
 * @apiSuccess {String} phone Phone of the Restaurant.
 * @apiSuccess {Number} open_hour  Hour open of the Restaurant.
 * @apiSuccess {Number} close_hour  Hour close of the Restaurant.
 * @apiSuccess {String} open_days Days open of the Restaurant.
 * 
 *
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 200 OK
 *      {
 *          "id": "123",
 *          "name": "Restaurant Name",
 *          "describe": "Description of the Restaurant",
 *          "picture": "http://exemple.com",
 *          "address": "Restaurant Address 123 road of exemple",
 *          "phone": "1234",
 *          "open_hour": "12",
 *          "close_hour": "24",
 *          "open_days": "all the days",
 *      }
 *
 * @apiError RestaurantNotFound The id of the Restaurant was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Restaurant Error"
 *     }
 */

// POST restaurants/
restaurantRouter.post('/', AuthMiddleware.userAuth,  RestaurantController.createRestaurant);

/**
 * @api {put} /Restaurant/:id PUT Restaurant information
 * @apiName PutRestaurant
 * @apiGroup Restaurant
 * @apiVersion 0.1.0
 *
 * @apiParam {Number} id Restaurant unique ID.
 *
 * @apiSuccess {String} name  Name of the Restaurant.
 * @apiSuccess {String} describe  Describe of the Restaurant.
 * @apiSuccess {String} picture  Link url tothe picture of the Restaurant.
 * @apiSuccess {String} address Address of the Restaurant.
 * @apiSuccess {String} phone Phone of the Restaurant.
 * @apiSuccess {Number} open_hour  Hour open of the Restaurant.
 * @apiSuccess {Number} close_hour  Hour close of the Restaurant.
 * @apiSuccess {String} open_days Days open of the Restaurant.
 * 
 *
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 200 OK
 *      {
 *          "id": "123",
 *          "name": "Restaurant Name",
 *          "describe": "Description of the Restaurant",
 *          "picture": "http://exemple.com",
 *          "address": "Restaurant Address 123 road of exemple",
 *          "phone": "1234",
 *          "open_hour": "12",
 *          "close_hour": "24",
 *          "open_days": "all the days",
 *      }
 *
 * @apiError RestaurantNotFound The id of the Restaurant was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Restaurant Error"
 *     }
 */

// PUT restaurants/:id
restaurantRouter.put('/:id',AuthMiddleware.userAuth, RestaurantController.updateRestaurant);

/**
 * @api {delete} /Restaurant/:id DELETE Restaurant information
 * @apiName DeleteRestaurant
 * @apiGroup Restaurant
 * @apiVersion 0.1.0
 *
 * @apiParam {Number} id Restaurant unique ID.
 *
 * @apiSuccess {String} name  Name of the Restaurant.
 * @apiSuccess {String} describe  Describe of the Restaurant.
 * @apiSuccess {String} picture  Link url tothe picture of the Restaurant.
 * @apiSuccess {String} address Address of the Restaurant.
 * @apiSuccess {String} phone Phone of the Restaurant.
 * @apiSuccess {Number} open_hour  Hour open of the Restaurant.
 * @apiSuccess {Number} close_hour  Hour close of the Restaurant.
 * @apiSuccess {String} open_days Days open of the Restaurant.
 * 
 *
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 200 OK
 *
 * @apiError RestaurantNotFound The id of the Restaurant was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Restaurant Error"
 *     }
 */

// DELETE restaurants/:id
restaurantRouter.delete('/:id',AuthMiddleware.userAuth, RestaurantController.deleteRestaurant);