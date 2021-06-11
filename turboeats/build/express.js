"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Express = void 0;
var express_1 = __importDefault(require("express"));
var errorHandler = require("errorhandler");
var Express = /** @class */ (function () {
    function Express(options) {
        this.options = options;
        //create expressjs application
        this.app = express_1.default();
        //configure application
        this.config();
        this.app.set('port', this.options.port);
    }
    /**
     * Configure application
     */
    Express.prototype.config = function () {
        this.app
            .get('/', function (req, res) { return res.send('Hello World!'); })
            .use(errorHandler());
    };
    /**
     * Bootstrap the application.
     */
    Express.bootstrap = function (options) {
        console.log("Try to start server");
        return new Express(options);
    };
    return Express;
}());
exports.Express = Express;
