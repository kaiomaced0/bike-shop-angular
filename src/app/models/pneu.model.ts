import { Marca } from "./marca.model";

export class Pneu{
  id?: number;
  nome?: string;
  nomeLongo?: string;
  descricao?: string;
  valorCompra?: string;
  preco?: number;
  cor?: string;
  estoque?: number;
  images?: string[];
  marca?: Marca;

}