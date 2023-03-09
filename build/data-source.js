"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("dotenv/config");
const User_1 = require("./models/User");
const Order_1 = require("./models/Order");
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const port = process.env.DB_PORT;
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: port,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    entities: [User_1.User, Order_1.Order],
    migrations: [`${__dirname}/**/migrations/*.{ts,js}`],
    "synchronize": true,
    "logging": false
});
exports.AppDataSource.initialize();
