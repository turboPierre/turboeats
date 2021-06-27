/**
 * Required External Modules and Interfaces
 */

import express from 'express';
import * as UserController from '../controllers/user.controller';
import * as AuthMiddleware from '../middleware/auth';

/**
 * Router Definition
 */

export const userRouter = express.Router();

/**
 * Controller Definitions
 */

// GET users/
userRouter.get('/', AuthMiddleware.userAuth , UserController.getAllUsers)

// GET users/:id
// @Unused
// userRouter.get('/:id', UserController.getOneUser);

// PUT users/:id
// @Unused
// userRouter.put('/:id', UserController.updateUser);

// DELETE users/:id
// @Unused
// userRouter.delete('/:id', UserController.deleteUser);

// SIGNUP
userRouter.post('/signup', UserController.signup);

// LOGIN
userRouter.post('/login', UserController.login);