"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRepository = void 0;
const Order_1 = require("../models/Order");
const data_source_1 = require("../data-source");
exports.OrderRepository = data_source_1.AppDataSource.getRepository(Order_1.Order);
