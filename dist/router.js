"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userController_1 = require("./controller/userController");
const express_1 = require("express");
const routes = (0, express_1.Router)();
routes.post("/user", new userController_1.UserController().create);
routes.post("/user/:id_user/create", new userController_1.UserController().createOrder);
routes.get("/home");
exports.default = routes;
