import { Produto } from "./produto.model";

export class Usuario{
  id?: number;
  cpf?: string;
  login?: string;
  senha?: string;
  dataNascimento?: Date;
  nome?: string | null;
  email?: string | null;
  cartoes?: any[];
  enderecos?: any[];
  listaGostei?: Produto[];

  constructor() {
  }
}
