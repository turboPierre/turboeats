import express from 'express';
import * as MenuController from '../controllers/menu.controller';
import * as AuthMiddleware from '../../../resolution_controller/src/middleware/auth';
export const menuRouter = express.Router();

// GET menus/
menuRouter.get('/', MenuController.getAllMenus);

// GET menus/:id
menuRouter.get('/id=:id',AuthMiddleware.userAuth, MenuController.getOneMenu);

// GET menus/:id
menuRouter.get('/restaurant=:id', MenuController.getRestaurantMenus);

// POST menus/
menuRouter.post('/',AuthMiddleware.userAuth,MenuController.createMenu);

// PUT menus/:id
menuRouter.put('/:id',AuthMiddleware.userAuth,MenuController.updateMenu);

// DELETE menus/:id
menuRouter.delete('/:id',AuthMiddleware.userAuth, MenuController.deleteMenu);