export class Pedido {
  readonly id_pedido: number;
  readonly material: string;
  prioridade: Prioridade;
  readonly maquina: string;
  estado: Estado;
  arquivo: Buffer | null;
  readonly medida: string;
  readonly id_horaDisponivel: number;
  readonly id_autorPedido: number;
  readonly id_autorAutorizador: number;

  constructor(
    material: string,
    prioridade: Prioridade,
    maquina: string,
    estado: Estado,
    arquivo: Buffer,
    medida: string,
    id_horaDisponivel: number,
    id_autorPedido: number,
    id_autorAutorizador: number
  ) {
    this.material = material;
    this.prioridade = prioridade;
    this.maquina = maquina;
    this.estado = estado;
    this.arquivo = arquivo;
    this.medida = medida;
    this.id_horaDisponivel = id_horaDisponivel;
    this.id_autorPedido = id_autorPedido;
    this.id_autorAutorizador = id_autorAutorizador;
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

  public get Material(): string {
    return this.material;
  }
  public get Prioridade(): Prioridade {
    return this.prioridade;
  }
  public get Maquina(): string {
    return this.maquina;
  }
  public get Estado(): Estado {
    return this.estado;
  }
  public get Arquivo(): Buffer | null{
    return this.arquivo;
  }
  
  public get Medida(): string {
    return this.medida;
  }

  public get Id_horaDisponivel(): number {
    return this.id_horaDisponivel;
  }

  public get Id_autorPedido(): number {
    return this.id_autorPedido;
  }

  public get Id_autorAutorizador(): number {
    return this.id_autorAutorizador;
  }
}

export enum Estado {
  pendente = "pendente",
  aprovado = "aprovado",
  concluido = "concluido",
  reprovado = "reprovado",
}

export enum Prioridade {
  baixa = "baixa",
  media = "media",
  alta = "alta",
}
