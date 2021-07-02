import express from 'express';
import * as UserController from '../controllers/user.controller';
import * as AuthMiddleware from '../../../resolution_controller/src/middleware/auth';

export const userRouter = express.Router();

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
userRouter.get('/', AuthMiddleware.userAuth, UserController.getAllUsers)

/**
 * @api {get} /user/ GET all User information
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
userRouter.get('/myInfos',AuthMiddleware.userAuth, UserController.myInfos);

/**
 * @api {put} /user/ PUT Request User information
 * @apiName PutUser
 * @apiGroup User
 * @apiVersion 0.1.0
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiParam {String} firstname Firstname of the User.
 * @apiParam {String} lastname  Lastname of the User.
 * @apiParam {String} email  Email of the User.
 * @apiParam {String} phone  Phone of the User.
 * @apiParam {String} password  Passeword of of the User.
 * @apiParam {String} address  Address of the User.
 * @apiParam {String} active  User act.
 * 
 *
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 200 OK
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
userRouter.put('/updateInfos',AuthMiddleware.userAuth, UserController.updateUser);

/**
 * @api {post} /user/ POST Register User information
 * @apiName PostUser
 * @apiGroup User
 * @apiVersion 0.1.0
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiParam {String} firstname Firstname of the User.
 * @apiParam {String} lastname  Lastname of the User.
 * @apiParam {String} email  Email of the User.
 * @apiParam {String} phone  Phone of the User.
 * @apiParam {String} password  Passeword of of the User.
 * @apiParam {String} address  Address of the User.
 * @apiParam {String} active  User act.
 * 
 *
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 200 OK
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
 * @api {post} /user/ POST login User information
 * @apiName PostUser
 * @apiGroup User
 * @apiVersion 0.1.0
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiParam {String} firstname Firstname of the User.
 * @apiParam {String} lastname  Lastname of the User.
 * @apiParam {String} email  Email of the User.
 * @apiParam {String} phone  Phone of the User.
 * @apiParam {String} password  Passeword of of the User.
 * @apiParam {String} address  Address of the User.
 * @apiParam {String} active  User act.
 * 
 *
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 200 OK
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

/**
 * @api {delete} /user/ DELETE User information
 * @apiName DeleteUser
 * @apiGroup User
 * @apiVersion 0.1.0
 *
 * @apiParam {Number} id Users unique ID.
 *
 *
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 200 OK
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */