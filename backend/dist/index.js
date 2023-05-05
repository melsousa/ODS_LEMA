"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
<<<<<<< HEAD
const express_1 = __importDefault(require("express"));
const data_source_1 = require("./data-source");
const routes_1 = __importDefault(require("./routes"));
=======
require("express-async-errors");
const express_1 = __importDefault(require("express"));
const data_source_1 = require("./data-source");
const routes_1 = __importDefault(require("./routes"));
const error_1 = require("./middlewares/error");
>>>>>>> origin/Melissa
data_source_1.AppDataSource.initialize().then(async () => {
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.use(routes_1.default);
<<<<<<< HEAD
    return app.listen(process.env.PORT, () => {
        console.log(`localhost:${process.env.PORT}`);
    });
=======
    app.use(error_1.errorMiddleware);
    return app.listen(process.env.PORT);
>>>>>>> origin/Melissa
});
