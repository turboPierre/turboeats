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

/**
 * @api {get} /user/:id Request User information
 * @apiName GetUser
 * @apiGroup User
 * @apiVersion 1.0.0
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 * @apiSuccess {String} email  Email of the User.
 * @apiSuccess {String} phone  Phone of the User.
 * @apiSuccess {String} password  Passeword of of the User.
 * @apiSuccess {String} address  Address of the User.
 * @apiSuccess {String} active  User act.
 * 
 *
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 200 OK
 *      {
 *          "id": "123",
 *          "firstName": "Joe",
 *          "lastName": "Mason",
 *          "email": "Joe.Masson@test.fr",
 *          "phone": "0640404040",
 *          "password": "string205",
 *          "address": "80 rue des moussons",
 *          "role": "livreur",
 *          "active": "vrai"
 *      }
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
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