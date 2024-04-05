import { Marca } from "./marca.model";
import { Produto } from "./produto.model";

export class Ferramenta{
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
}
