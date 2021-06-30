import express from 'express';
import * as UserController from '../controllers/user.controller';

export const userRouter = express.Router();


// GET users/
userRouter.get('/', UserController.getAllUsers)


// GET users/myInfos
userRouter.get('/myInfos', UserController.myInfos);

// PUT users/updateInfos
userRouter.put('/updateInfos',UserController.updateUser);

// SIGNUP
userRouter.post('/signup', UserController.signup);


// LOGIN
userRouter.post('/login', UserController.login);