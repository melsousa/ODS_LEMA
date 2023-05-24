"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Prioridade = exports.Estado = exports.Pedido = void 0;
class Pedido {
    constructor(material, prioridade, maquina, arquivo, medida, id_horaDisponivel, id_autorPedido, id_autorAutorizador) {
        this.material = material;
        this.prioridade = prioridade;
        this.maquina = maquina;
        this.estado = Estado.pendete;
        this.arquivo = arquivo;
        this.medida = medida;
        this.id_horaDisponivel = id_horaDisponivel;
        this.id_autorPedido = id_autorPedido;
        this.id_autorAutorizador = id_autorAutorizador;
    }
    setEstado(estado) {
        if (this.estado == Estado.pendete && estado == (Estado.aprovado || Estado.reprovado)) {
            this.estado = estado;
        }
        else if (this.estado == Estado.aprovado && estado == Estado.concluido) {
            this.estado = estado;
        }
        else if (this.estado == Estado.concluido) {
            throw ("pedido ja concluido, nao pode ser alterado");
        }
        else {
            throw ("escolha um estado valido");
        }
    }
    get Material() {
        return this.material;
    }
    get Prioridade() {
        return this.prioridade;
    }
    get Maquina() {
        return this.maquina;
    }
    get Estado() {
        return this.estado;
    }
    get Arquivo() {
        return this.arquivo;
    }
    get Medida() {
        return this.medida;
    }
    get Id_horaDisponivel() {
        return this.id_horaDisponivel;
    }
    get Id_autorPedido() {
        return this.id_autorPedido;
    }
    get Id_autorAutorizador() {
        return this.id_autorAutorizador;
    }
}
exports.Pedido = Pedido;
var Estado;
(function (Estado) {
    Estado["pendete"] = "pendente";
    Estado["aprovado"] = "aprovado";
    Estado["concluido"] = "concluido";
    Estado["reprovado"] = "reprovado";
})(Estado = exports.Estado || (exports.Estado = {}));
var Prioridade;
(function (Prioridade) {
    Prioridade["baixa"] = "baixa";
    Prioridade["media"] = "media";
    Prioridade["alta"] = "alta";
})(Prioridade = exports.Prioridade || (exports.Prioridade = {}));
