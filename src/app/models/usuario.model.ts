import { Produto } from "./produto.model";

export class Usuario{
  id?: number;
  cpf?: string;
  login?: string;
  senha?: string;
  dataNascimento?: Date;
  nome?: string;
  email?: string;
  telefone?: string[];
  cartoes?: any[];
  enderecos?: any[];
  listaGostei?: Produto[];

  constructor() {
  }
}
