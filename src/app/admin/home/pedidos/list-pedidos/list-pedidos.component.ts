import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';
import { Compra } from '../../../../models/compra.model';
import { CompraService } from '../../../../services/compra/compra.service';

@Component({
  selector: 'app-list-pedidos',
  standalone: true,
  imports: [MatIcon, MatButton],
  templateUrl: './list-pedidos.component.html',
  styleUrl: './list-pedidos.component.css'
})
export class ListPedidosComponent {

  constructor(private router: Router, private service: CompraService) {
  }

  compras: Compra[] = [];

  ngOnInit() {
    this.service.getAll().subscribe((data: Compra[]) => {
      this.compras = data;
    });
  }

}
