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

// GET products/
productRouter.get('/', ProductController.getAllProducts)

// GET products/:id
productRouter.get('/:id', ProductController.getOneProduct);

// POST products/
productRouter.post('/', ProductController.createProduct);

// PUT products/:id
productRouter.put('/:id', ProductController.updateProduct);

// DELETE products/:id
productRouter.delete('/:id', ProductController.deleteProduct);