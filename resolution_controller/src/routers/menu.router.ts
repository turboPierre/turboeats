import express from 'express';
import * as MenuController from '../controllers/menu.controller';
export const menuRouter = express.Router();

// GET menus/
menuRouter.get('/', MenuController.getAllMenus);

// GET menus/:id
menuRouter.get('/id=:id', MenuController.getOneMenu);

// GET menus/:id
menuRouter.get('/restaurant=:id', MenuController.getRestaurantMenus);

// POST menus/
menuRouter.post('/',MenuController.createMenu);

// PUT menus/:id
menuRouter.put('/:id',MenuController.updateMenu);

// DELETE menus/:id
menuRouter.delete('/:id', MenuController.deleteMenu);