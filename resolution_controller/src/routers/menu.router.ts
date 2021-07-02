import express from 'express';
import * as MenuController from '../controllers/menu.controller';
import * as AuthMiddleware from '../../../resolution_controller/src/middleware/auth';
export const menuRouter = express.Router();

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
menuRouter.get('/', MenuController.getAllMenus);

/**
 * @api {get} /Menu/ GET Specific Menu information
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

// GET menus/:id
menuRouter.get('/id=:id',AuthMiddleware.userAuth, MenuController.getOneMenu);

/**
 * @api {get} /Menu/ GET Specific Restaurant Menu information
 * @apiName GetMenu
 * @apiGroup Menu
 * @apiVersion 0.1.0
 *
 * @apiParam {Number} id Menu unique ID.
 * @apiParam {Number} id Restaurtant unique ID.
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

// GET menus/:id
menuRouter.get('/restaurant=:id', MenuController.getRestaurantMenus);

/**
 * @api {post} /Menu/ POST Specific Restaurant Menu information
 * @apiName PostMenu
 * @apiGroup Menu
 * @apiVersion 0.1.0
 *
 *
 * @apiParam {String} name  of the Menu.
 * @apiParam {String} price  Price of the Menu.
 * @apiParam {String} describe  Describe of the Menu.
 * @apiParam {String} picture  Link url tothe picture of the Menu.
 * @apiParam {Object} _restaurantId  Id_restaurant of the Menu.
 * @apiParam {Object} _productId  all id_product of of the Menu.
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

// POST menus/
menuRouter.post('/',AuthMiddleware.userAuth,MenuController.createMenu);

/**
 * @api {put} /Menu/ PUT Specific Menu information
 * @apiName PutMenu
 * @apiGroup Menu
 * @apiVersion 0.1.0
 *
 *
 * @apiParam {String} name  of the Menu.
 * @apiParam {String} price  Price of the Menu.
 * @apiParam {String} describe  Describe of the Menu.
 * @apiParam {String} picture  Link url tothe picture of the Menu.
 * @apiParam {Object} _restaurantId  Id_restaurant of the Menu.
 * @apiParam {Object} _productId  all id_product of of the Menu.
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

// PUT menus/:id
menuRouter.put('/:id',AuthMiddleware.userAuth,MenuController.updateMenu);

/**
 * @api {delete} /Menu/ DELETE Menu information
 * @apiName DeleteMenu
 * @apiGroup Menu
 * @apiVersion 0.1.0
 *
 * @apiParam {Number} id Menu unique ID.
 *
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
menuRouter.delete('/:id',AuthMiddleware.userAuth, MenuController.deleteMenu);