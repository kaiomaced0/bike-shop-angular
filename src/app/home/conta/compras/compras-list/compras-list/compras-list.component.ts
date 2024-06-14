import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UsuariologadoService } from '../../../../../services/usuariologado/usuariologado.service';
import { Compra } from '../../../../../models/compra.model';
import { CardItemPedidoComponent } from '../../../../components/card-item-pedido/card-item-pedido.component';

@Component({
  selector: 'app-compras-list',
  standalone: true,
  imports: [CardItemPedidoComponent],
  templateUrl: './compras-list.component.html',
  styleUrl: './compras-list.component.css'
})
export class ComprasListComponent implements OnInit{


  compras: Compra[] = [];

  constructor(private router: Router, private usuarioLogadoService: UsuariologadoService, private dialog: MatDialog, private snackBar: MatSnackBar) {
  }


  ngOnInit() {
    this.usuarioLogadoService.getCompras().subscribe((data: Compra[]) => {
      this.compras = data;
    });
  }

}
