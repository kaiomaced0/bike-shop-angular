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
    localStorage.setItem('token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJ1bml0aW5zLWp3dCIsInN1YiI6ImthaW8iLCJncm91cHMiOlsiVXNlciIsIkFkbWluIl0sImV4cCI6MTcxNTg4OTI4OSwiaWF0IjoxNzE1ODAyODg5LCJqdGkiOiIyMTI1MzRkZS02ZGQ0LTQ3OGEtOThmNC1iNzBiYTdmZjkyNzMifQ.a3ypoRK0vrGV2iGqhOnXxYqSj1eqweeX1nFbgDCqzxGbNuYphiVgqKcgaYop8GieUW2xk921pqM7gFQrNr3qcU4G24-Z4TdvTFv2Dfsx5YuyEzh7UTWIyD1mISVKKC4IVZsFbREv6_ex7yDN9QPXjN3_gCgzkTeq6ChXHWcKexJwSNMKZFlO9OGAdz9wjxANvBYCPv9f1PRU6MSejWs7QgwdqKDJjuPvm1ebyq1S5IeVWAL99K0FgYn5CgKeEm4rervLL_nlJq_1rk5YnD1-svX577furwGe_vwoF22azpHUy_BUvze-83lrmoowMz-67NP3QwOc_ucazkjY44DilA')
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
