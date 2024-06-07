import { Cidade } from "./cidade.models";

export class Endereco{
  id?: number;
  nome?: string;
  cidade?: Cidade;
  idCidade?: number;
  cep?: string;
  rua?: string;
  numero?: string;
  descricao?: string;
  idUsuario?: number;
}
