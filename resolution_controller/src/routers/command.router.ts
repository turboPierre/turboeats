import express from 'express';
import * as CommandController from '../controllers/command.controller';
import * as AuthMiddleware from '../../../resolution_controller/src/middleware/auth';

export const commandRouter = express.Router();

/**
 * @api {get} /Command/ GET Command information
 * @apiName GetCommand
 * @apiGroup Command
 * @apiVersion 0.1.0
 *
 * @apiParam {Number} id Command unique ID.
 *
 * @apiSuccess {String} name  of the Command.
 * @apiSuccess {String} price  Price of the Command.
 * @apiSuccess {Number} _clientId  Id_user to the Command.
 * @apiSuccess {Number} _restaurantId  Id_restaurant of the Command.
 * @apiSuccess {Number} _delivererId  Id_deliverer to the Command.
 * @apiSuccess {Object} _menuId  all id_ of the Command.
 * @apiSuccess {Object} _productId  all id_product of of the Command.
 * 
 *
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 200 OK
 *      {
 *          "id": "123",
 *          "name": "Name Command",
 *          "price": "25",
 *          "_clientId": "1334",
 *          "_restaurantId": "0640404040",
 *          "_delivererId": "06465",
 *          "_menuId": "{"id":"1313"}",
 *          "_productId": "{"id":"1234"}",
 *      }
 *
 * @apiError CommandNotFound The id of the Command was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Command Error"
 *     }
 */

// GET commands/
commandRouter.get('/',AuthMiddleware.userAuth, CommandController.getAllCommands);

/**
 * @api {get} /Command/ GET History Delivered Command 
 * @apiName GetCommand
 * @apiGroup Command
 * @apiVersion 0.1.0
 *
 * @apiParam {Number} id Command unique ID.
 *
 * @apiSuccess {String} name  of the Command.
 * @apiSuccess {String} price  Price of the Command.
 * @apiSuccess {Number} _clientId  Id_user to the Command.
 * @apiSuccess {Number} _restaurantId  Id_restaurant of the Command.
 * @apiSuccess {Number} _delivererId  Id_deliverer to the Command.
 * @apiSuccess {Object} _menuId  all id_ of the Command.
 * @apiSuccess {Object} _productId  all id_product of of the Command.
 * 
 *
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 200 OK
 *      {
 *          "id": "123",
 *          "name": "Name Command",
 *          "price": "25",
 *          "_clientId": "1334",
 *          "_restaurantId": "0640404040",
 *          "_delivererId": "06465",
 *          "_menuId": "{"id":"1313"}",
 *          "_productId": "{"id":"1234"}",
 *      }
 *
 * @apiError CommandNotFound The id of the Command was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Command Error"
 *     }
 */

// GET commands/
commandRouter.get('/delivererCommand',AuthMiddleware.userAuth, CommandController.delivererCommand);

/**
 * @api {get} /Command/ GET User Command information
 * @apiName GetCommand
 * @apiGroup Command
 * @apiVersion 0.1.0
 *
 * @apiParam {Number} id Command unique ID.
 *
 * @apiSuccess {String} name  of the Command.
 * @apiSuccess {String} price  Price of the Command.
 * @apiSuccess {Number} _clientId  Id_user to the Command.
 * @apiSuccess {Number} _restaurantId  Id_restaurant of the Command.
 * @apiSuccess {Number} _delivererId  Id_deliverer to the Command.
 * @apiSuccess {Object} _menuId  all id_ of the Command.
 * @apiSuccess {Object} _productId  all id_product of of the Command.
 * 
 *
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 200 OK
 *      {
 *          "id": "123",
 *          "name": "Name Command",
 *          "price": "25",
 *          "_clientId": "1334",
 *          "_restaurantId": "0640404040",
 *          "_delivererId": "06465",
 *          "_menuId": "{"id":"1313"}",
 *          "_productId": "{"id":"1234"}",
 *      }
 *
 * @apiError CommandNotFound The id of the Command was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Command Error"
 *     }
 */

// GET commands/userCommands
commandRouter.get('/userCommands',AuthMiddleware.userAuth, CommandController.userCommands);

/**
 * @api {get} /Command/ GET Restaurant Command information
 * @apiName GetCommand
 * @apiGroup Command
 * @apiVersion 0.1.0
 *
 * @apiParam {Number} id Command unique ID.
 *
 * @apiSuccess {String} name  of the Command.
 * @apiSuccess {String} price  Price of the Command.
 * @apiSuccess {Number} _clientId  Id_user to the Command.
 * @apiSuccess {Number} _restaurantId  Id_restaurant of the Command.
 * @apiSuccess {Number} _delivererId  Id_deliverer to the Command.
 * @apiSuccess {Object} _menuId  all id_ of the Command.
 * @apiSuccess {Object} _productId  all id_product of of the Command.
 * 
 *
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 200 OK
 *      {
 *          "id": "123",
 *          "name": "Name Command",
 *          "price": "25",
 *          "_clientId": "1334",
 *          "_restaurantId": "0640404040",
 *          "_delivererId": "06465",
 *          "_menuId": "{"id":"1313"}",
 *          "_productId": "{"id":"1234"}",
 *      }
 *
 * @apiError CommandNotFound The id of the Command was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Command Error"
 *     }
 */

// GET commands/restaurantCommand/:id
commandRouter.get('/restaurantCommand/:id',AuthMiddleware.userAuth, CommandController.restaurantCommand);

/**
 * @api {get} /Command/ GET Specific Command information
 * @apiName GetCommand
 * @apiGroup Command
 * @apiVersion 0.1.0
 *
 * @apiParam {Number} id Command unique ID.
 *
 * @apiSuccess {String} name  of the Command.
 * @apiSuccess {String} price  Price of the Command.
 * @apiSuccess {Number} _clientId  Id_user to the Command.
 * @apiSuccess {Number} _restaurantId  Id_restaurant of the Command.
 * @apiSuccess {Number} _delivererId  Id_deliverer to the Command.
 * @apiSuccess {Object} _menuId  all id_ of the Command.
 * @apiSuccess {Object} _productId  all id_product of of the Command.
 * 
 *
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 200 OK
 *      {
 *          "id": "123",
 *          "name": "Name Command",
 *          "price": "25",
 *          "_clientId": "1334",
 *          "_restaurantId": "0640404040",
 *          "_delivererId": "06465",
 *          "_menuId": "{"id":"1313"}",
 *          "_productId": "{"id":"1234"}",
 *      }
 *
 * @apiError CommandNotFound The id of the Command was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Command Error"
 *     }
 */

// GET commands/id:id
commandRouter.get('/id=:id',AuthMiddleware.userAuth, CommandController.getOneCommand);

/**
 * @api {post} /Command/ POST Command information
 * @apiName PostCommand
 * @apiGroup Command
 * @apiVersion 0.1.0
 *
 *
 * @apiParam {String} name  of the Command.
 * @apiParam {String} price  Price of the Command.
 * @apiParam {Number} _clientId  Id_user to the Command.
 * @apiParam {Number} _restaurantId  Id_restaurant of the Command.
 * @apiParam {Number} _delivererId  Id_deliverer to the Command.
 * @apiParam {Object} _menuId  all id_ of the Command.
 * @apiParam {Object} _productId  all id_product of of the Command.
 * 
 *
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 200 OK
 *
 * @apiError CommandNotFound The id of the Command was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Command Error"
 *     }
 */

// POST commands/
commandRouter.post('/',AuthMiddleware.userAuth, CommandController.createCommand);

/**
 * @api {put} /Command/ PUT Command information
 * @apiName PutCommand
 * @apiGroup Command
 * @apiVersion 0.1.0
 *
 *
 * @apiParam {String} name  of the Command.
 * @apiParam {String} price  Price of the Command.
 * @apiParam {Number} _clientId  Id_user to the Command.
 * @apiParam {Number} _restaurantId  Id_restaurant of the Command.
 * @apiParam {Number} _delivererId  Id_deliverer to the Command.
 * @apiParam {Object} _menuId  all id_ of the Command.
 * @apiParam {Object} _productId  all id_product of of the Command.
 * 
 *
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 200 OK
 *
 * @apiError CommandNotFound The id of the Command was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Command Error"
 *     }
 */

// PUT commands/:id
commandRouter.put('/:id',AuthMiddleware.userAuth, CommandController.updateCommand);

/**
 * @api {delete} /Command/ DELETE Command information
 * @apiName DeleteCommand
 * @apiGroup Command
 * @apiVersion 0.1.0
 *
 * @apiParam {Number} id Command unique ID.
 * 
 *
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 200 OK
 *
 * @apiError CommandNotFound The id of the Command was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Command Error"
 *     }
 */

// DELETE commands/:id
commandRouter.delete('/:id',AuthMiddleware.userAuth, CommandController.deleteCommand);