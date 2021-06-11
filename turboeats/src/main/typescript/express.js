"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Express = void 0;
var express = __importStar(require("express"));
var errorHandler = require("errorhandler");
var Express = /** @class */ (function () {
    function Express(options) {
        this.options = options;
        //create expressjs application
        this.app = express();
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
