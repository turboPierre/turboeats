/**
 * Required External Modules and Interfaces
 */

import express from 'express';
import * as MenuController from '../controllers/menu.controller';
import * as AuthMiddleware from '../middleware/auth';

/**
 * Router Definition
 */

export const menuRouter = express.Router();


/**
 * Controller Definitions
 */

// GET menus/
menuRouter.get('/',AuthMiddleware.userAuth, MenuController.getAllMenus)

// GET menus/:id
menuRouter.get('/:id',AuthMiddleware.userAuth, MenuController.getOneMenu);

// POST menus/
menuRouter.post('/',AuthMiddleware.userAuth, MenuController.createMenu);

// PUT menus/:id
menuRouter.put('/:id',AuthMiddleware.userAuth, MenuController.updateMenu);

// DELETE menus/:id
menuRouter.delete('/:id',AuthMiddleware.userAuth, MenuController.deleteMenu);