import { Marca } from "./marca.model";

export class Produto {
  id?: number;
  nome?: string;
  nomeLongo?: string;
  descricao?: string;
  custo?: string;
  preco?: number;
  cor?: string;
  estoque?: number;
  images?: string[];
  marca?: Marca;

  constructor(
  ) {
  }
}
