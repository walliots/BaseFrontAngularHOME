export class UserModel {
    id?: number
    nome!: string
    sexo?: string
    email?: string
    ativo?: boolean
    perfil?: string

    constructor(nome: string, email: string,setor: string,  sexo: any, ativo:boolean, perfil: any){
    }
  }
  