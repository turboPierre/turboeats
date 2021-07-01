/**
 * Required External Modules and Interfaces
 */

import express from 'express';
import * as MenuController from '../controllers/menu.controller';

/**
 * Router Definition
 */

export const menuRouter = express.Router();


/**
 * Controller Definitions
 */

/**
 * @api {get} /Menu/ GET Menu information
 * @apiName GetMenu
 * @apiGroup Menu
 * @apiVersion 0.1.0
 *
 * @apiParam {Number} id Menu unique ID.
 *
 * @apiSuccess {String} name  of the Menu.
 * @apiSuccess {String} price  Price of the Menu.
 * @apiSuccess {String} describe  Describe of the Menu.
 * @apiSuccess {String} picture  Link url tothe picture of the Menu.
 * @apiSuccess {Object} _restaurantId  Id_restaurant of the Menu.
 * @apiSuccess {Object} _productId  all id_product of of the Menu.
 * 
 *
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 200 OK
 *      {
 *          "id": "123",
 *          "name": "Menu Name",
 *          "price": "25",
 *          "describe": "Description of the menu",
 *          "picture": "http://exemple.com",
 *          "_restaurantId": "{"id":"1234"}",
 *          "_productId": "{"id":"1234"}",
 *      }
 *
 * @apiError MenuNotFound The id of the Menu was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Menu Error"
 *     }
 */

// GET menus/
menuRouter.get('/', MenuController.getAllMenus)

/**
 * Controller Definitions
 */

/**
 * @api {get} /Menu/:id GET unique Menu information
 * @apiName GetMenu
 * @apiGroup Menu
 * @apiVersion 0.1.0
 *
 * @apiParam {Number} id Menu unique ID.
 *
 * @apiSuccess {String} name  of the Menu.
 * @apiSuccess {String} price  Price of the Menu.
 * @apiSuccess {String} describe  Describe of the Menu.
 * @apiSuccess {String} picture  Link url tothe picture of the Menu.
 * @apiSuccess {Object} _restaurantId  Id_restaurant of the Menu.
 * @apiSuccess {Object} _productId  all id_product of of the Menu.
 * 
 *
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 200 OK
 *      {
 *          "id": "123",
 *          "name": "Menu Name",
 *          "price": "25",
 *          "describe": "Description of the menu",
 *          "picture": "http://exemple.com",
 *          "_restaurantId": "{"id":"1234"}",
 *          "_productId": "{"id":"1234"}",
 *      }
 *
 * @apiError MenuNotFound The id of the Menu was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Menu Error"
 *     }
 */

// GET menus/id=:id
menuRouter.get('/id=:id', MenuController.getOneMenu);

// GET menus/restaurant=:id
menuRouter.get('/restaurant=:id', MenuController.getRestaurantMenus);

/**
 * @api {post} /Menu/ POST Menu information
 * @apiName PostMenu
 * @apiGroup Menu
 * @apiVersion 0.1.0
 *
 * @apiParam {Number} id Menu unique ID.
 *
 * @apiSuccess {String} name  of the Menu.
 * @apiSuccess {String} price  Price of the Menu.
 * @apiSuccess {String} describe  Describe of the Menu.
 * @apiSuccess {String} picture  Link url tothe picture of the Menu.
 * @apiSuccess {Object} _restaurantId  Id_restaurant of the Menu.
 * @apiSuccess {Object} _productId  all id_product of of the Menu.
 * 
 *
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 200 OK
 *      {
 *          "id": "123",
 *          "name": "Menu Name",
 *          "price": "25",
 *          "describe": "Description of the menu",
 *          "picture": "http://exemple.com",
 *          "_restaurantId": "{"id":"1234"}",
 *          "_productId": "{"id":"1234"}",
 *      }
 *
 * @apiError MenuNotFound The id of the Menu was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Menu Error"
 *     }
 */

// POST menus/
menuRouter.post('/', MenuController.createMenu);

/**
 * @api {put} /Menu/:id PUT Menu information
 * @apiName PostMenu
 * @apiGroup Menu
 * @apiVersion 0.1.0
 *
 * @apiParam {Number} id Menu unique ID.
 *
 * @apiSuccess {String} name  of the Menu.
 * @apiSuccess {String} price  Price of the Menu.
 * @apiSuccess {String} describe  Describe of the Menu.
 * @apiSuccess {String} picture  Link url tothe picture of the Menu.
 * @apiSuccess {Object} _restaurantId  Id_restaurant of the Menu.
 * @apiSuccess {Object} _productId  all id_product of of the Menu.
 * 
 *
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 200 OK
 *      {
 *          "id": "123",
 *          "name": "Menu Name",
 *          "price": "25",
 *          "describe": "Description of the menu",
 *          "picture": "http://exemple.com",
 *          "_restaurantId": "{"id":"1234"}",
 *          "_productId": "{"id":"1234"}",
 *      }
 *
 * @apiError MenuNotFound The id of the Menu was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Menu Error"
 *     }
 */

// PUT menus/:id
menuRouter.put('/:id', MenuController.updateMenu);

/**
 * @api {delete} /Menu/:id DELETE unique Menu information
 * @apiName DeleteMenu
 * @apiGroup Menu
 * @apiVersion 0.1.0
 *
 * @apiParam {Number} id Menu unique ID.
 *
 * @apiSuccess {String} name  of the Menu.
 * @apiSuccess {String} price  Price of the Menu.
 * @apiSuccess {String} describe  Describe of the Menu.
 * @apiSuccess {String} picture  Link url tothe picture of the Menu.
 * @apiSuccess {Object} _restaurantId  Id_restaurant of the Menu.
 * @apiSuccess {Object} _productId  all id_product of of the Menu.
 * 
 *
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 200 OK
 *
 * @apiError MenuNotFound The id of the Menu was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Menu Error"
 *     }
 */

// DELETE menus/:id
menuRouter.delete('/:id', MenuController.deleteMenu);