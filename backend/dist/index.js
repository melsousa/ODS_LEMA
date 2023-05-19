"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("express-async-errors");
const express_1 = __importDefault(require("express"));
const data_source_1 = require("./data-source");
const routes_1 = __importDefault(require("./routes"));
//import { errorMiddleware } from './middlewares/error';
//import { ApiError, BadRequestError, NotFoundError, UnauthorizedError } from "./helpers/api-erros";
data_source_1.AppDataSource.initialize().then(async () => {
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.use(routes_1.default);
    return app.listen(process.env.PORT, () => {
        console.log(`localhost:${process.env.PORT}`);
    });
});
