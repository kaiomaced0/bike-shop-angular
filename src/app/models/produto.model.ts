import { Marca } from "./marca.model";

export class Produto {
  id?: number;
  nome?: string;
  nomeLongo?: string;
  descricao?: string;
  valorCompra?: string;
  preco?: number;
  cor?: string;
  estoque?: number;
  img?: string[];
  idMarca?: number;
  marca?: Marca;
  idCor?: number;

  constructor(
  ) {
  }
}
