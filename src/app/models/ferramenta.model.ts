import { Marca } from "./marca.model";
import { Produto } from "./produto.model";

export class Ferramenta{
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

}
