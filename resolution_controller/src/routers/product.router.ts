import express from 'express';
import * as ProductController from '../controllers/product.controller';
import * as AuthMiddleware from '../../../resolution_controller/src/middleware/auth';

export const productRouter = express.Router();

// GET products/
productRouter.get('/', ProductController.getAllProducts);

// GET products/:id
productRouter.get('/id=:id',AuthMiddleware.userAuth, ProductController.getOneProduct);

// GET products/:id
productRouter.get('/restaurant=:id', ProductController.getRestaurantProducts);

// POST products/
productRouter.post('/',AuthMiddleware.userAuth,ProductController.createProduct);

// PUT products/:id
productRouter.put('/:id',AuthMiddleware.userAuth, ProductController.updateProduct);

// DELETE products/:id
productRouter.delete('/:id',AuthMiddleware.userAuth, ProductController.deleteProduct);