import { Component, Input } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-item-pedido',
  standalone: true,
  imports: [MatButton],
  templateUrl: './card-item-pedido.component.html',
  styleUrl: './card-item-pedido.component.css'
})
export class CardItemPedidoComponent {
  @Input() id?: number;
  @Input() codigoPedido?: string;
  @Input() dataPedido?: string;
  @Input() preco?: number;

  constructor(private router: Router) {
  }
  abrirAcompanhamento() {
    console.log('Acompanhamento para o pedido', this.codigoPedido);

  }
  visualizar() {
    this.router.navigate([`/conta/compras/detalhes/${this.id!}`]);
  }

}
