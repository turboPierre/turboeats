import express from 'express';
import * as CommandController from '../controllers/command.controller';

export const commandRouter = express.Router();

// GET commands/
commandRouter.get('/', CommandController.getAllCommands);

// GET commands/
commandRouter.get('/delivererCommand', CommandController.delivererCommand);

// GET commands/id:id
commandRouter.get('/id=:id', CommandController.getOneCommand);

// POST commands/
commandRouter.post('/', CommandController.createCommand);

// PUT commands/:id
commandRouter.put('/:id', CommandController.updateCommand);

// DELETE commands/:id
commandRouter.delete('/:id', CommandController.deleteCommand);