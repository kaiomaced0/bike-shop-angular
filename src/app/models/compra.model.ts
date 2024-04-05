export class Compra{
  id?: number;
  loginUsuario?: string;
  valorTotal?: number;
  formaPagamento?: string;
  statusPedido?: string;
  codigoRastreio?: string;
  idEnderecoEntrega?: number;
  pago?: boolean;
  idCupom?: number;
}
