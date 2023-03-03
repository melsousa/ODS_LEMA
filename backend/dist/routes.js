"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserController_1 = require("./controllers/UserController");
const express_1 = require("express");
const routes = (0, express_1.Router)();
routes.post("/user", new UserController_1.UserController().create);
routes.post("/user/:id_user/create", new UserController_1.UserController().createOrder);
exports.default = routes;
