/**
 * Required External Modules and Interfaces
 */

import express from 'express';
import * as MenuController from '../controllers/menu.controller';

/**
 * Router Definition
 */

export const menuRouter = express.Router();


/**
 * Controller Definitions
 */

// GET menus/
menuRouter.get('/', MenuController.getAllMenus)

// GET menus/:id
menuRouter.get('/:id', MenuController.getOneMenu);

// POST menus/
menuRouter.post('/', MenuController.createMenu);

// PUT menus/:id
menuRouter.put('/:id', MenuController.updateMenu);

// DELETE menus/:id
menuRouter.delete('/:id', MenuController.deleteMenu);