import express from 'express';
import * as UserController from '../controllers/user.controller';
import * as AuthMiddleware from '../../../resolution_controller/src/middleware/auth';

export const userRouter = express.Router();


// GET users/
userRouter.get('/', AuthMiddleware.userAuth, UserController.getAllUsers)


// GET users/myInfos
userRouter.get('/myInfos',AuthMiddleware.userAuth, UserController.myInfos);

// PUT users/updateInfos
userRouter.put('/updateInfos',AuthMiddleware.userAuth, UserController.updateUser);

// SIGNUP
userRouter.post('/signup', UserController.signup);


// LOGIN
userRouter.post('/login', UserController.login);