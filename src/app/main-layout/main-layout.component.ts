import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule, MatIconButton} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { FormsModule, NgModel } from '@angular/forms';
import {SidebarModule} from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, MatIconModule, MatButtonModule, MatToolbarModule, MatMenuModule, FormsModule, SidebarModule, ButtonModule, MatFormFieldModule, MatInput, MatIconButton],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {
  visibleSidebar1!: boolean;

  constructor(private router: Router) {}

  irParaLogin() {
    this.router.navigate(['/login']);
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['/']).then(() => {
      window.location.reload();
    });
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
