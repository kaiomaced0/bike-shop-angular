import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { FormsModule, NgModel } from '@angular/forms';
import {SidebarModule} from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, MatIconModule, MatButtonModule, MatToolbarModule, MatMenuModule, FormsModule, SidebarModule, ButtonModule],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {
  visibleSidebar1!: boolean;
  termoPesquisa: string = '';

  constructor(private router: Router) {}

  pesquisar(query: string) {
    console.log('Pesquisando por:', query);

    this.router.navigate(['/search', { search: query }]);
  }


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
