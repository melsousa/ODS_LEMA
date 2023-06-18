"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Prioridade = exports.Estado = exports.Pedido = void 0;
class Pedido {
    constructor(material, prioridade, maquina, estado, arquivo, cor, descricao, comentario, id_horaDisponivel, id_autorPedido, id_autorAutorizador) {
        this.material = material;
        this.prioridade = prioridade;
        this.maquina = maquina;
        this.estado = estado;
        this.arquivo = arquivo;
        this.cor = cor;
        this.descricao = descricao;
        this.comentario = comentario;
        this.id_horaDisponivel = id_horaDisponivel;
        this.id_autorPedido = id_autorPedido;
        this.id_autorAutorizador = id_autorAutorizador;
    }
    setEstado(estado) {
        if (this.estado == Estado.pendente &&
            estado == (Estado.aprovado || Estado.reprovado)) {
            this.estado = estado;
        }
        else if (this.estado == Estado.aprovado && estado == Estado.concluido) {
            this.estado = estado;
        }
        else if (this.estado == Estado.concluido) {
            throw "pedido ja concluido, nao pode ser alterado";
        }
        else {
            throw "escolha um estado valido";
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
    get Cor() {
        return this.cor;
    }
    get Descricao() {
        return this.descricao;
    }
    get Comentario() {
        return this.comentario;
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
    Estado["pendente"] = "pendente";
    Estado["aprovado"] = "aprovado";
    Estado["em_andamento"] = "em andamento";
    Estado["concluido"] = "concluido";
    Estado["reprovado"] = "reprovado";
})(Estado = exports.Estado || (exports.Estado = {}));
var Prioridade;
(function (Prioridade) {
    Prioridade["baixa"] = "baixa";
    Prioridade["media"] = "media";
    Prioridade["alta"] = "alta";
})(Prioridade = exports.Prioridade || (exports.Prioridade = {}));
