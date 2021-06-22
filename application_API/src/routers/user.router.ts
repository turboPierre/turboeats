/**
 * Required External Modules and Interfaces
 */

import express from 'express';
import * as UserController from '../controllers/user.controller';

/**
 * Router Definition
 */

export const userRouter = express.Router();


/**
 * Controller Definitions
 */

// GET users/
userRouter.get('/', UserController.getAllUsers)

// GET users/:id
userRouter.get('/:id', UserController.getOneUser);

// POST users/
userRouter.post('/', UserController.createUser);

// PUT users/:id
userRouter.put('/:id', UserController.updateUser);

// DELETE users/:id
userRouter.delete('/:id', UserController.deleteUser);