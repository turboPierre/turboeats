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

/**
 * @api {get} /user/ GET Request User information
 * @apiName GetUser
 * @apiGroup User
 * @apiVersion 0.1.0
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
userRouter.get('/', UserController.getAllUsers)

// GET users/:id
// @Unused
// userRouter.get('/:id', AuthMiddleware.userAuth, UserController.getOneUser);

/**
 * @api {get} /user/:id GET Request unique User information
 * @apiName GetUser
 * @apiGroup User
 * @apiVersion 0.1.0
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

// GET users/myInfos
userRouter.get('/myInfos', UserController.myInfos);


/**
 * @api {put} /user/updateInfos PUT Request User information
 * @apiName PutUser
 * @apiGroup User
 * @apiVersion 0.1.0
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

// PUT users/updateInfos
userRouter.put('/updateInfos',UserController.updateUser);

// DELETE users/:id
// @Unused
// userRouter.delete('/:id', UserController.deleteUser);

/**
 * @api {post} /user/signup POST Request User information
 * @apiName PostUser
 * @apiGroup User
 * @apiVersion 0.1.0
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

// SIGNUP
userRouter.post('/signup', UserController.signup);

/**
 * @api {post} /user/login POST Request User information
 * @apiName PostUser
 * @apiGroup User
 * @apiVersion 0.1.0
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

// LOGIN
userRouter.post('/login', UserController.login);