/**
 * Required External Modules and Interfaces
 */

import express from 'express';
import * as CommandController from '../controllers/command.controller';
import * as AuthMiddleware from '../middleware/auth';

/**
 * Router Definition
 */

export const commandRouter = express.Router();


/**
 * Controller Definitions
 */

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
commandRouter.get('/', AuthMiddleware.userAuth, CommandController.getAllCommands)

/**
 * @api {get} /Command/:id GET unique Command information
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

// GET commands/:id
commandRouter.get('/:id',AuthMiddleware.userAuth, CommandController.getOneCommand);

/**
 * @api {post} /Command/ POST Command
 * @apiName postCommand
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

// POST commands/
commandRouter.post('/',AuthMiddleware.userAuth, CommandController.createCommand);

/**
 * @api {post} /Command/:id POST unique Command
 * @apiName postCommand
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

// PUT commands/:id
commandRouter.put('/:id',AuthMiddleware.userAuth, CommandController.updateCommand);


/**
 * @api {delete} /Command/:id DELETE Command
 * @apiName DeleteCommand
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