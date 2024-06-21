import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UsuariologadoService } from '../../../../../services/usuariologado/usuariologado.service';
import { Compra } from '../../../../../models/compra.model';
import { CardItemPedidoComponent } from '../../../../components/card-item-pedido/card-item-pedido.component';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-compras-list',
  standalone: true,
  imports: [CardItemPedidoComponent, MatPaginatorModule],
  templateUrl: './compras-list.component.html',
  styleUrl: './compras-list.component.css'
})
export class ComprasListComponent implements OnInit{


  compras: Compra[] = [];
  pageSize = 10;
  page = 0;
  totalRecords = 0;

  constructor(private router: Router, private usuarioLogadoService: UsuariologadoService, private dialog: MatDialog, private snackBar: MatSnackBar) {
  }


  ngOnInit() {

    this.usuarioLogadoService.getCompras(this.page, this.pageSize).subscribe((data: Compra[]) => {
      this.compras = data;
      console.log(data);
    });

    this.usuarioLogadoService.countCompras().subscribe(data => {
      this.totalRecords = data;
      console.log(this.totalRecords);
    });
  }


  paginar(event: PageEvent): void {
    this.page = event.pageIndex;
    this.pageSize = event.pageSize;
    this.ngOnInit();
  }

}
