export class PedidoAnonimo {
  readonly id_pedidoAnonimo: number;
  readonly material: string;
  readonly maquina: string;
  estado: Estado;
  readonly arquivo: Buffer;
  readonly medida: string;
  readonly codigo: string;
  readonly id_horaDisponivel: number;
  readonly id_autorAutorizadorAnonimo: number;

  constructor(
    id_pedidoAnonimo: number,
    material: string,
    maquina: string,
    estado: Estado,
    arquivo: Buffer,
    medida: string,
    codigo: string,
    id_horaDisponivel: number,
    id_autorAutorizadorAnonimo: number
  ) {
    this.id_pedidoAnonimo = id_pedidoAnonimo;
    this.material = material;
    this.maquina = maquina;
    this.estado = Estado.pendente;
    this.arquivo = arquivo;
    this.medida = medida;
    this.codigo = codigo;
    this.id_horaDisponivel = id_horaDisponivel;
    this.id_autorAutorizadorAnonimo = id_autorAutorizadorAnonimo;
  }

  public get Material(): string {
    return this.material;
  }
  public get Maquina(): string {
    return this.maquina;
  }
  public get Estado(): Estado {
    return this.estado;
  }
  public get Arquivo(): Buffer {
    return this.arquivo;
  }

  public get Medida(): string {
    return this.medida;
  }

  public get Id_horaDisponivel(): number {
    return this.id_horaDisponivel;
  }

  public get Id_autorAutorizador(): number {
    return this.Id_autorAutorizador;
  }
  public setEstado(estado: Estado) {
    if (
      this.estado == Estado.pendente &&
      estado == (Estado.aprovado || Estado.reprovado)
    ) {
      this.estado = estado;
    } else if (this.estado == Estado.aprovado && estado == Estado.concluido) {
      this.estado = estado;
    } else if (this.estado == Estado.concluido) {
      throw "pedido ja concluido, nao pode ser alterado";
    } else {
      throw "escolha um estado valido";
    }
  }
}

export enum Estado {
  pendente = "pendente",
  aprovado = "aprovado",
  concluido = "concluido",
  reprovado = "reprovado",
}
