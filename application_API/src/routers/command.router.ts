/**
 * Required External Modules and Interfaces
 */

import express from 'express';
import * as CommandController from '../controllers/command.controller';
import * as AuthMiddleware from '../middleware/auth';

/**
 * Router Definition
 */

export const commandRouter = express.Router();


/**
 * Controller Definitions
 */

// GET commands/
commandRouter.get('/', AuthMiddleware.userAuth, CommandController.getAllCommands)

// GET commands/:id
commandRouter.get('/:id',AuthMiddleware.userAuth, CommandController.getOneCommand);

// POST commands/
commandRouter.post('/',AuthMiddleware.userAuth, CommandController.createCommand);

// PUT commands/:id
commandRouter.put('/:id',AuthMiddleware.userAuth, CommandController.updateCommand);

// DELETE commands/:id
commandRouter.delete('/:id',AuthMiddleware.userAuth, CommandController.deleteCommand);