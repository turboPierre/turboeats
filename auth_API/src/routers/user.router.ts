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

// GET clients/
userRouter.get('/', UserController.getAllUsers)

// GET clients/:id
userRouter.get('/:id', UserController.getOneUser);

// POST clients/
userRouter.post('/', UserController.createUser);

// PUT clients/:id
userRouter.put('/:id', UserController.updateUser);

// DELETE clients/:id
userRouter.delete('/:id', UserController.deleteUser);