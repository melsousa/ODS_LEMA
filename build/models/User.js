"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const Order_1 = require("./Order");
const typeorm_1 = require("typeorm");
let User = class User {
    id;
    name;
    email;
    password;
    orders;
    constructor(id, name, email, password, orders) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.orders = orders;
    }
    validate() {
        const validatePassword = new RegExp("^(?=.*[A-Za-z])(?=.*?[0-9]).{6,}$");
        const validateEmail = new RegExp("(([a-z]+\.?[a-z]+\.?[a-z]+[0-9]{2})+)(@aluno.ifce.edu.br)");
        if (this.name == "" || this.name == null) {
            throw new Error("nome é obrigatorio");
        }
        if (this.email == "" || this.email == null || !(validateEmail.test(this.email))) {
            throw new Error("crie o email apartir do email institucional");
        }
        if (this.password == "" || this.password == null || !(validatePassword.test(this.password))) {
            throw new Error("senha é obrigatorio, devendo conter números, simbolos e letras maiusculas e minusculas ");
        }
    }
    get Id() {
        return this.id;
    }
    get Name() {
        return this.name;
    }
    get Email() {
        return this.email;
    }
    get Password() {
        return this.password;
    }
    get getOrders() {
        return this.orders;
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)()
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text" })
], User.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text" })
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", unique: true })
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Order_1.Order, (order) => order.idUser)
], User.prototype, "orders", void 0);
User = __decorate([
    (0, typeorm_1.Entity)({ database: "User" })
], User);
exports.User = User;
