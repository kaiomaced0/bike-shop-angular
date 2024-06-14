import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { SidebarModule } from 'primeng/sidebar';

@Component({
  selector: 'app-adm-main-layout',
  standalone: true,
  imports: [RouterOutlet, MatIconModule, MatButtonModule, MatToolbarModule, MatMenuModule, MatSidenavModule, MatListModule, MatToolbarModule, SidebarModule],
  templateUrl: './adm-main-layout.component.html',
  styleUrl: './adm-main-layout.component.css'
})
export class AdmMainLayoutComponent {
  visibleSidebar1!: boolean;
  constructor(private router: Router) {}

  irParaHomeAdmin() {
    this.router.navigate(['/admin']);
  }

  voltarHome() {
    this.router.navigate(['/']);
  }

}
