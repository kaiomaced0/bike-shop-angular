export class Compra {
  id?: number;
  usuarioId?: number;
  loginUsuario?: string;
  listaItemCompraResponseDTO?: ItemCompraResponseDTO[];
  valorTotal?: number;
  formaPagamento?: string;
  statusPedido?: string;
  token?: string;
  codigoRastreio?: string;
  dataPrevista?: string;
  dataEntrega?: string;
  idEnderecoEntrega?: number;
  pago?: boolean;
  idCupom?: number;
}

export class ItemCompraResponseDTO {
  produtoId?: number;
  quantidade?: number;
  precoUnitario?: number;
  preco?: number;
  produtoNome?:string;
  imgProduto?:string;
}
