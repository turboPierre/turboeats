import express from 'express';
import * as ProductController from '../controllers/product.controller';
import * as AuthMiddleware from '../../../resolution_controller/src/middleware/auth';

export const productRouter = express.Router();

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
productRouter.get('/', ProductController.getAllProducts);

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

// GET products/:id
productRouter.get('/id=:id',AuthMiddleware.userAuth, ProductController.getOneProduct);

/**
 * @api {get} /Product/ GET Product information
 * @apiName GetProduct
 * @apiGroup Product
 * @apiVersion 0.1.0
 *
 * @apiParam {Number} id Product unique ID.
 * @apiParam {Number} id Restaurant unique ID.
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

// GET products/:id
productRouter.get('/restaurant=:id', ProductController.getRestaurantProducts);

/**
 * @api {post} /Product/ POST Product information
 * @apiName PostProduct
 * @apiGroup Product
 * @apiVersion 0.1.0
 *
 *
 * @apiParam {String} name  of the Product.
 * @apiParam {String} price  Price of the Product.
 * @apiParam {String} describe  Describe of the Product.
 * @apiParam {String} picture  Link url tothe picture of the Product.
 * @apiParam {Object} _restaurantId  Id_restaurant of the Product.
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


// POST products/
productRouter.post('/',AuthMiddleware.userAuth,ProductController.createProduct);

/**
 * @api {put} /Product/ PUT Product information
 * @apiName PutProduct
 * @apiGroup Product
 * @apiVersion 0.1.0
 *
 * @apiParam {Number} id Product unique ID.
 *
 * @apiParam {String} name  of the Product.
 * @apiParam {String} price  Price of the Product.
 * @apiParam {String} describe  Describe of the Product.
 * @apiParam {String} picture  Link url tothe picture of the Product.
 * @apiParam {Object} _restaurantId  Id_restaurant of the Product.
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

// PUT products/:id
productRouter.put('/:id',AuthMiddleware.userAuth, ProductController.updateProduct);

/**
 * @api {delete} /Product/ DELETE Product information
 * @apiName DeleteProduct
 * @apiGroup Product
 * @apiVersion 0.1.0
 *
 * @apiParam {Number} id Product unique ID.
 *
 * @apiParam {String} name  of the Product.
 * @apiParam {String} price  Price of the Product.
 * @apiParam {String} describe  Describe of the Product.
 * @apiParam {String} picture  Link url tothe picture of the Product.
 * @apiParam {Object} _restaurantId  Id_restaurant of the Product.
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
productRouter.delete('/:id',AuthMiddleware.userAuth, ProductController.deleteProduct);