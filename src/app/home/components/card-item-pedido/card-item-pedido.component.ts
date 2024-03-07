import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-item-pedido',
  standalone: true,
  imports: [],
  templateUrl: './card-item-pedido.component.html',
  styleUrl: './card-item-pedido.component.css'
})
export class CardItemPedidoComponent {
  @Input() id?: string;
  @Input() codigoPedido?: string;
  @Input() dataPedido?: string;
  @Input() preco?: number;
  abrirAcompanhamento() {
    console.log('Acompanhamento para o pedido', this.codigoPedido);
  }

}
