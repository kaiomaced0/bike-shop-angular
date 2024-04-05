import { Marca } from "./marca.model";

export class Produto {
  id?: number;
  nome?: string;
  nomeLongo?: string;
  preco?: number;
  cor?: string;
  estoque?: number;
  images?: string[];
  marca?: Marca;

  constructor(
    id: number,
    nome: string,
    nomeLongo: string,
    preco: number,
    cor: string,
    estoque: number,
    images: string[],
    marca: Marca
  ) {
    this.id = id;
    this.nome = nome;
    this.nomeLongo = nomeLongo;
    this.preco = preco;
    this.cor = cor;
    this.estoque = estoque;
    this.images = images;
    this.marca = marca;
  }
}
