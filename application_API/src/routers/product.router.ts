/**
 * Required External Modules and Interfaces
 */

import express from 'express';
import * as ProductController from '../controllers/product.controller';
import * as AuthMiddleware from '../middleware/auth';

/**
 * Router Definition
 */

export const productRouter = express.Router();


/**
 * Controller Definitions
 */

// GET products/
productRouter.get('/', ProductController.getAllProducts)

// GET products/:id
productRouter.get('/:id',AuthMiddleware.userAuth, ProductController.getOneProduct);

// POST products/
productRouter.post('/',AuthMiddleware.userAuth, ProductController.createProduct);

// PUT products/:id
productRouter.put('/:id',AuthMiddleware.userAuth, ProductController.updateProduct);

// DELETE products/:id
productRouter.delete('/:id',AuthMiddleware.userAuth, ProductController.deleteProduct);