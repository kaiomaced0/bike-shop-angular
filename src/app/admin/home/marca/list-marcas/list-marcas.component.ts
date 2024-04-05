import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';
import { MarcaService } from '../../../../services/marca/marca.service';
import { Marca } from '../../../../models/marca.model';

@Component({
  selector: 'app-list-marcas',
  standalone: true,
  imports: [MatIcon, MatButton, HttpClientModule],
  templateUrl: './list-marcas.component.html',
  styleUrl: './list-marcas.component.css'
})
export class ListMarcasComponent {


  constructor(private router: Router, private service: MarcaService) {
  }

  marcas: Marca[] = [];

  ngOnInit() {
    this.service.getAll().subscribe((data: Marca[]) => {
      this.marcas = data;
    });
  }

  irParaNewmarca() {
    this.router.navigate(['/admin/marcas/new']);
  }
  editarmarca(marcaId: number) {
    this.router.navigate(['/admin/marcas/edit']);
  }

  excluirmarca(marcaId: number) {
  }

}
