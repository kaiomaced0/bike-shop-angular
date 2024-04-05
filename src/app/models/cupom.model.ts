import { Produto } from "./produto.model";

export class Cupom{
  id?: number;
  nome?: string;
  quantidade?: number;
  codigo?: string;
  valorDesconto?: number;
  produtos?: number[];
}
