/**
 * Required External Modules and Interfaces
 */

import express from 'express';
import * as ProductController from '../controllers/product.controller';

/**
 * Router Definition
 */

export const productRouter = express.Router();


/**
 * Controller Definitions
 */

/**
 * @api {get} /Product/ GET Product information
 * @apiName GetProduct
 * @apiGroup Product
 * @apiVersion 0.1.0
 *
 * @apiParam {Number} id Product unique ID.
 *
 * @apiSuccess {String} name  of the Product.
 * @apiSuccess {String} price  Price of the Product.
 * @apiSuccess {String} describe  Describe of the Product.
 * @apiSuccess {String} picture  Link url tothe picture of the Product.
 * @apiSuccess {Object} _restaurantId  Id_restaurant of the Product.
 * 
 *
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 200 OK
 *      {
 *          "id": "123",
 *          "name": "Product Name",
 *          "price": "25",
 *          "describe": "Description of the product",
 *          "picture": "http://exemple.com",
 *          "_restaurantId": "{"id":"1234"}",
 *      }
 *
 * @apiError ProductNotFound The id of the Product was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Product Error"
 *     }
 */

// GET products/
productRouter.get('/', ProductController.getAllProducts)

/**
 * @api {get} /Product/:id GET unique Product information
 * @apiName GetProduct
 * @apiGroup Product
 * @apiVersion 0.1.0
 *
 * @apiParam {Number} id Product unique ID.
 *
 * @apiSuccess {String} name  of the Product.
 * @apiSuccess {String} price  Price of the Product.
 * @apiSuccess {String} describe  Describe of the Product.
 * @apiSuccess {String} picture  Link url tothe picture of the Product.
 * @apiSuccess {Object} _restaurantId  Id_restaurant of the Product.
 * 
 *
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 200 OK
 *      {
 *          "id": "123",
 *          "name": "Product Name",
 *          "price": "25",
 *          "describe": "Description of the product",
 *          "picture": "http://exemple.com",
 *          "_restaurantId": "{"id":"1234"}",
 *      }
 *
 * @apiError ProductNotFound The id of the Product was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Product Error"
 *     }
 */

// GET products/id:id
productRouter.get('/id=:id', ProductController.getOneProduct);

// GET products/restaurant:id
productRouter.get('/restaurant=:id', ProductController.getRestaurantProducts);


/**
 * @api {post} /Product/ POST Product information
 * @apiName PostProduct
 * @apiGroup Product
 * @apiVersion 0.1.0
 *
 * @apiParam {Number} id Product unique ID.
 *
 * @apiSuccess {String} name  of the Product.
 * @apiSuccess {String} price  Price of the Product.
 * @apiSuccess {String} describe  Describe of the Product.
 * @apiSuccess {String} picture  Link url tothe picture of the Product.
 * @apiSuccess {Object} _restaurantId  Id_restaurant of the Product.
 * 
 *
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 200 OK
 *      {
 *          "id": "123",
 *          "name": "Product Name",
 *          "price": "25",
 *          "describe": "Description of the product",
 *          "picture": "http://exemple.com",
 *          "_restaurantId": "{"id":"1234"}",
 *      }
 *
 * @apiError ProductNotFound The id of the Product was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Product Error"
 *     }
 */

// POST products/
productRouter.post('/', ProductController.createProduct);

/**
 * @api {put} /Product/:id PUT Product information
 * @apiName PutProduct
 * @apiGroup Product
 * @apiVersion 0.1.0
 *
 * @apiParam {Number} id Product unique ID.
 *
 * @apiSuccess {String} name  of the Product.
 * @apiSuccess {String} price  Price of the Product.
 * @apiSuccess {String} describe  Describe of the Product.
 * @apiSuccess {String} picture  Link url tothe picture of the Product.
 * @apiSuccess {Object} _restaurantId  Id_restaurant of the Product.
 * 
 *
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 200 OK
 *      {
 *          "id": "123",
 *          "name": "Product Name",
 *          "price": "25",
 *          "describe": "Description of the product",
 *          "picture": "http://exemple.com",
 *          "_restaurantId": "{"id":"1234"}",
 *      }
 *
 * @apiError ProductNotFound The id of the Product was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Product Error"
 *     }
 */

// PUT products/:id
productRouter.put('/:id', ProductController.updateProduct);

/**
 * @api {delete} /Product/:id DELETE Product information
 * @apiName DeleteProduct
 * @apiGroup Product
 * @apiVersion 0.1.0
 *
 * @apiParam {Number} id Product unique ID.
 *
 * @apiSuccess {String} name  of the Product.
 * @apiSuccess {String} price  Price of the Product.
 * @apiSuccess {String} describe  Describe of the Product.
 * @apiSuccess {String} picture  Link url tothe picture of the Product.
 * @apiSuccess {Object} _restaurantId  Id_restaurant of the Product.
 * 
 *
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 200 OK
 *
 * @apiError ProductNotFound The id of the Product was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Product Error"
 *     }
 */

// DELETE products/:id
productRouter.delete('/:id', ProductController.deleteProduct);