"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.State = exports.Order = void 0;
const User_1 = require("./User");
const typeorm_1 = require("typeorm");
let Order = class Order {
    id;
    orderUsername;
    startDate;
    endDate;
    printer;
    state;
    idUser;
    constructor(id, orderUsername, startDate, endDate, printer, state, idUser) {
        this.id = id;
        this.orderUsername = orderUsername;
        this.startDate = startDate;
        this.endDate = endDate;
        this.printer = printer;
        this.state = state;
        this.idUser = idUser;
    }
    get Id() {
        return this.id;
    }
    get OrderUserName() {
        return this.orderUsername;
    }
    get StartDate() {
        return this.startDate;
    }
    get EndDate() {
        return this.endDate;
    }
    get Printer() {
        return this.printer;
    }
    get State() {
        return this.state;
    }
    get IdUser() {
        return this.idUser;
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)()
], Order.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text" })
], Order.prototype, "orderUsername", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true })
], Order.prototype, "startDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: true })
], Order.prototype, "endDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: true })
], Order.prototype, "printer", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text" })
], Order.prototype, "state", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User_1.User, user => user.orders),
    (0, typeorm_1.JoinColumn)({ name: 'id_user' })
], Order.prototype, "idUser", void 0);
Order = __decorate([
    (0, typeorm_1.Entity)('Orders')
], Order);
exports.Order = Order;
var State;
(function (State) {
    State[State["pendete"] = 0] = "pendete";
    State[State["aprovado"] = 1] = "aprovado";
    State[State["concluido"] = 2] = "concluido";
    State[State["reprovado"] = 3] = "reprovado";
})(State = exports.State || (exports.State = {}));
