/**
 * Required External Modules and Interfaces
 */

import express from 'express';
import * as CommandController from '../controllers/command.controller';

/**
 * Router Definition
 */

export const commandRouter = express.Router();


/**
 * Controller Definitions
 */

// GET commands/
commandRouter.get('/', CommandController.getAllCommands)

// GET commands/:id
commandRouter.get('/:id', CommandController.getOneCommand);

// POST commands/
commandRouter.post('/', CommandController.createCommand);

// PUT commands/:id
commandRouter.put('/:id', CommandController.updateCommand);

// DELETE commands/:id
commandRouter.delete('/:id', CommandController.deleteCommand);