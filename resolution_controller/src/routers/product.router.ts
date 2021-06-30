import express from 'express';
import * as ProductController from '../controllers/product.controller';

export const productRouter = express.Router();

productRouter.get('/', ProductController.getAllProducts)

// GET products/:id
productRouter.get('/:id', ProductController.getOneProduct);

// POST products/
productRouter.post('/',ProductController.createProduct);

// PUT products/:id
productRouter.put('/:id', ProductController.updateProduct);

// DELETE products/:id
productRouter.delete('/:id', ProductController.deleteProduct);