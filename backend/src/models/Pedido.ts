export class Pedido {
  
  readonly id_pedido:number
  readonly material: string;
  readonly prioridade: Prioridade
  readonly maquina: string;
  estado: Estado;
  readonly arquivo: string
  readonly medida: string
  readonly id_horaDisponivel: number
  readonly id_autorPedido: number
  readonly id_autorAutorizador: number;
  
  
  constructor( material: string, prioridade: Prioridade, maquina: string,
    arquivo: string, medida: string, id_horaDisponivel: number, 
    id_autorPedido: number, id_autorAutorizador: number) {

    this.material = material
    this.prioridade = prioridade
    this.maquina = maquina
    this.estado = Estado.pendete
    this.arquivo = arquivo
    this.medida = medida
    this.id_horaDisponivel = id_horaDisponivel
    this.id_autorPedido = id_autorPedido
    this.id_autorAutorizador = id_autorAutorizador
  }

  
  
  
  
  public setEstado (estado: Estado) {
    if(this.estado == Estado.pendete && estado == (Estado.aprovado || Estado.reprovado))  {
      
      this.estado = estado

    } else if(this.estado == Estado.aprovado && estado == Estado.concluido) {

      this.estado = estado

    } else if(this.estado == Estado.concluido) {

      throw("pedido ja concluido, nao pode ser alterado")

    } else {
      throw("escolha um estado valido")
    }
    
  }

  
  public get Material(): string {
    return this.material
  }
  public get Prioridade(): Prioridade {
    return this.prioridade
  }
  public get Maquina(): string {
    return this.maquina
  }
  public get Estado(): Estado {
    return this.estado
  }
  public get Arquivo(): string {
    return this.arquivo
  }
  public get Medida(): string {
    return this.medida
  }

  public get Id_horaDisponivel() : number {
    return this.id_horaDisponivel
  }

  public get Id_autorPedido() : number {
    return this.id_autorPedido
  }

  public get Id_autorAutorizador() : number {
    return this.id_autorAutorizador
  }

}

export enum Estado {
  pendete = 'pendente',
  aprovado = 'aprovado',
  concluido = 'concluido',
  reprovado = 'reprovado',
}

export enum Prioridade {
  baixa = "baixa",
  media = "media",
  alta = "alta"

}

