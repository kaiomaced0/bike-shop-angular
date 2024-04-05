export class Usuario{
  id?: number;
  cpf?: string;
  login?: string;
  senha?: string;
  nome?: string | null;
  email?: string | null;
  cartoes?: any[];
  enderecos?: any[];
  listaGostei?: any[];

  constructor() {
  }
}
