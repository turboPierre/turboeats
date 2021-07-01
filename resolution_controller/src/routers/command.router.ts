import express from 'express';
import * as CommandController from '../controllers/command.controller';
import * as AuthMiddleware from '../../../resolution_controller/src/middleware/auth';

export const commandRouter = express.Router();

// GET commands/
commandRouter.get('/',AuthMiddleware.userAuth, CommandController.getAllCommands);

// GET commands/
commandRouter.get('/delivererCommand',AuthMiddleware.userAuth, CommandController.delivererCommand);

// GET commands/userCommands
commandRouter.get('/userCommands',AuthMiddleware.userAuth, CommandController.userCommands);

// GET commands/id:id
commandRouter.get('/id=:id',AuthMiddleware.userAuth, CommandController.getOneCommand);

// POST commands/
commandRouter.post('/',AuthMiddleware.userAuth, CommandController.createCommand);

// PUT commands/:id
commandRouter.put('/:id',AuthMiddleware.userAuth, CommandController.updateCommand);

// DELETE commands/:id
commandRouter.delete('/:id',AuthMiddleware.userAuth, CommandController.deleteCommand);