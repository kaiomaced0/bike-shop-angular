import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatCardModule, MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router) {
    localStorage.setItem('token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJ1bml0aW5zLWp3dCIsInN1YiI6ImthaW8iLCJncm91cHMiOlsiVXNlciIsIkFkbWluIl0sImV4cCI6MTcxNTk3NzI3MSwiaWF0IjoxNzE1ODkwODcxLCJqdGkiOiJjYTMxZTkzMi0yZDQwLTQ0MWQtYTExNy1jMmEwZTIzZjliY2UifQ.t6YP54GIpbEjIajdLl_wBesp9lT2QD2OyEEc6CeDoVxRxAWTLrSUvAc8kBr6kIn_OHY2Tfh4USvjt3XRhHiVGpl78N6O6minbpkFCycfs2_cMNMAlS-btXpfCyMDaWwtHyu71LQX7npQa2CAd49saBUpweQ6rftvA0eLQfGFfO2rSGOHgOvX6IgGyLrY1-PgRnG79tdW_i0GfEDxdaXIAoeiBeslbph7APXB1IdBgrrrP1lVnOgKeLcxmxQqJdbqjA4Lx2vmI0EZsu1GNhNSjLNN0Slou8q_zZFeKRm8-VXt9TbUHrqevD-lsA4CxLX7d5X5gSMeWowJ1ySUhaZ5mw')
  }

  irParaProdutosAdmin() {
    this.router.navigate(['/admin/produtos']);
  }
  irParaAjustesHomeAdmin() {
    this.router.navigate(['/admin/ajustes-home']);
  }
  irParaCategoriasAdmin() {
    this.router.navigate(['/admin/categorias']);
  }
  irParaCuponsAdmin() {
    this.router.navigate(['/admin/cupons']);
  }
  irParaDestaquesAdmin() {
    this.router.navigate(['/admin/destaques']);
  }
  irParaEntregasAdmin() {
    this.router.navigate(['/admin/entregas']);
  }
  irParaEstoqueAdmin() {
    this.router.navigate(['/admin/estoque']);
  }
  irParaPedidosAdmin() {
    this.router.navigate(['/admin/pedidos']);
  }
  irParaUsuariosAdmin() {
    this.router.navigate(['/admin/usuarios']);
  }
  irParaMarcasAdmin() {
    this.router.navigate(['/admin/marcas']);
  }
  irParaFornecedoresAdmin() {
    this.router.navigate(['/admin/fornecedores']);
  }
  irParaFreiosAdmin() {
    this.router.navigate(['/admin/freios']);
  }
  irParaPneusAdmin() {
    this.router.navigate(['/admin/pneus']);
  }
  irParaFerramentasAdmin() {
    this.router.navigate(['/admin/ferramentas']);
  }
  irParaBikesAdmin(){
    this.router.navigate(['/admin/bikes']);
  }

}
