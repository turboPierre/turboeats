import express from 'express';
import * as ProductController from '../controllers/product.controller';

export const productRouter = express.Router();

// GET products/
productRouter.get('/', ProductController.getAllProducts);

// GET products/:id
productRouter.get('/id=:id', ProductController.getOneProduct);

// GET products/:id
productRouter.get('/restaurant=:id', ProductController.getRestaurantProducts);

// POST products/
productRouter.post('/',ProductController.createProduct);

// PUT products/:id
productRouter.put('/:id', ProductController.updateProduct);

// DELETE products/:id
productRouter.delete('/:id', ProductController.deleteProduct);