import { Categoria } from "./categoria.model";
import { Marca } from "./marca.model";

export class Produto {
  id?: number;
  nome?: string;
  nomeLongo?: string;
  descricao?: string;
  valorCompra?: number;
  preco?: number;
  cor?: string;
  estoque?: number;
  img?: string[];
  idMarca?: number;
  marca?: Marca;
  idCor?: number;
  categoriasId?: number[];
  categorias?: Categoria[];
  starts?: number;
  favoritado?: boolean;

  constructor(
  ) {
    this.categoriasId = [];
  }
}
