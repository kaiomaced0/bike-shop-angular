import { Component, OnInit } from '@angular/core';
import { MatList, MatListItem } from '@angular/material/list';
import { Router } from '@angular/router';
import { Produto } from '../../models/produto.model';
import { CardProdutoFavoritoComponent } from '../components/card-produto-favorito/card-produto-favorito.component';
import { UsuariologadoService } from '../../services/usuariologado/usuariologado.service';
import { AuthService } from '../../services/auth/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-favoritos',
  standalone: true,
  imports: [MatList, MatListItem, CardProdutoFavoritoComponent],
  templateUrl: './favoritos.component.html',
  styleUrl: './favoritos.component.css'
})
export class FavoritosComponent implements OnInit {
  constructor(private router: Router, private service: UsuariologadoService) {
  }

  produtos: Produto[] = [];

  ngOnInit() {

    this.service.listgostei().subscribe((data: Produto[]) => {
      this.produtos = data;
    });

  }
  irParaHome() {
    this.router.navigate(['/']);
  }
}
