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
  constructor(private router: Router) {}

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
