import express from 'express';
import * as Controller from '../controllers/controller';

export const router = express.Router();


// GET commands/
router.get('/', CommandController.getAllCommands)

// GET commands/:id
router.get('/:id',AuthMiddleware.userAuth, CommandController.getOneCommand);

// POST commands/
router.post('/',AuthMiddleware.userAuth, CommandController.createCommand);

// PUT commands/:id
router.put('/:id',AuthMiddleware.userAuth, CommandController.updateCommand);

// DELETE commands/:id
router.delete('/:id',AuthMiddleware.userAuth, CommandController.deleteCommand);