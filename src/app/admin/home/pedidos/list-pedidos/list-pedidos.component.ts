import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';
import { Compra } from '../../../../models/compra.model';
import { CompraService } from '../../../../services/compra/compra.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-list-pedidos',
  standalone: true,
  imports: [MatIcon, MatButton, MatPaginator],
  templateUrl: './list-pedidos.component.html',
  styleUrl: './list-pedidos.component.css'
})
export class ListPedidosComponent {

  constructor(private router: Router, private service: CompraService) {
  }

  compras: Compra[] = [];
  pageSize = 10;
  page = 0;
  totalRecords = 0;

  ngOnInit() {
    this.service.getAll(this.page, this.pageSize).subscribe((data: Compra[]) => {
      this.compras = data;
    });
    this.service.count().subscribe(data => {
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
