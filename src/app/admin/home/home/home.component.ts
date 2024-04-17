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
    localStorage.setItem('token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJ1bml0aW5zLWp3dCIsInN1YiI6ImthaW8iLCJncm91cHMiOlsiVXNlciIsIkFkbWluIl0sImV4cCI6MTcxMzQ2NjAyNSwiaWF0IjoxNzEzMzc5NjI2LCJqdGkiOiIyNjRiZmNjMy0xNWI0LTQ0YmQtYWQwMC0wNzA0ZjkzMmVjN2YifQ.KHEpCoJWR_LWcuwCzh-14ovMiZy06cVSMtE6QD_ydnlUFNx_MbG9kknX-1aHuHTuS8DXIXCph55FQNx0y2zg9DtDVbUMCjhv_EiChdNWrn2XI9jPr_E5oB-ocixKAHG6W8y4xtxx_ui7itdVADTfRemW1o_tzPUpCpG7IwkYJLb_BayBGnX1mX8--nbwW-XBozxhBae2tP-hDEzGT65HFlAATqp-PRdAClCVwFmyWvSqjFfGIGt3sUJ8d8_YN0nXowjC12F8Gzo0uIu3HN1W4YoncehKZ9JQqm-mDPVRGacpIYcbnYV83PvGDOmQpVOiT6gwolpT3XjGMM4TLhWIcQ')
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
