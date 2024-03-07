import { Component } from '@angular/core';
import { CardItemPedidoComponent } from '../../components/card-item-pedido/card-item-pedido.component';

@Component({
  selector: 'app-pedidos',
  standalone: true,
  imports: [CardItemPedidoComponent],
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.css'
})
export class PedidosComponent {
pedidos = [
    {
      "id": "1",
      "codigoPedido": "CP001",
      "dataPedido": "2024-03-07",
      "preco": 10.99
    },
    {
      "id": "2",
      "codigoPedido": "CP002",
      "dataPedido": "2024-03-08",
      "preco": 15.75
    },
    {
      "id": "3",
      "codigoPedido": "CP003",
      "dataPedido": "2024-03-09",
      "preco": 20.50
    },
    {
      "id": "4",
      "codigoPedido": "CP004",
      "dataPedido": "2024-03-10",
      "preco": 8.25
    },
    {
      "id": "5",
      "codigoPedido": "CP005",
      "dataPedido": "2024-03-11",
      "preco": 12.60
    },
    {
      "id": "6",
      "codigoPedido": "CP006",
      "dataPedido": "2024-03-12",
      "preco": 18.30
    },
    {
      "id": "7",
      "codigoPedido": "CP007",
      "dataPedido": "2024-03-13",
      "preco": 25.99
    },
    {
      "id": "8",
      "codigoPedido": "CP008",
      "dataPedido": "2024-03-14",
      "preco": 9.99
    }
];
}
