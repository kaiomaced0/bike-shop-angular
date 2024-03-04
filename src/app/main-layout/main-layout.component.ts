import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, MatIconModule, MatButtonModule, MatToolbarModule, MatMenuModule],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {

  constructor(private router: Router) {}

  irParaLogin() {
    this.router.navigate(['/login']);
  }
  irParaHome() {
    this.router.navigate(['/']);
  }
  irParaMinhaConta() {
    this.router.navigate(['/conta']);
  }
  irParaFavoritos() {
    this.router.navigate(['/favoritos']);
  }
  irParaShopCart() {
    this.router.navigate(['/carrinho']);
  }
}
