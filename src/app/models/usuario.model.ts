import { Produto } from "./produto.model";

export class Usuario{
  id?: number;
  cpf?: string;
  login?: string;
  senha?: string;
  dataNascimento?: Date;
  nome?: string;
  email?: string;
  telefones?: string[];
  cartoes?: any[];
  enderecos?: any[];
  listaGostei?: Produto[];
  senhaAtual?: string;

  constructor() {
  }
}
