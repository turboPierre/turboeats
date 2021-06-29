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
// userRouter.get('/:id', AuthMiddleware.userAuth, UserController.getOneUser);

// GET users/myInfos
userRouter.get('/myInfos', AuthMiddleware.userAuth, UserController.myInfos);

// PUT users/updateInfos
userRouter.put('/updateInfos', AuthMiddleware.userAuth,UserController.updateUser);

// DELETE users/:id
// @Unused
// userRouter.delete('/:id', UserController.deleteUser);

// SIGNUP
userRouter.post('/signup', UserController.signup);

// LOGIN
userRouter.post('/login', UserController.login);