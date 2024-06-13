import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { CardProdutoComponent } from '../components/card-produto/card-produto.component';
import { MatFormField } from '@angular/material/form-field';
import { Router } from '@angular/router';
import { ProdutoService } from '../../services/produto/produto.service';
import { Produto } from '../../models/produto.model';
import { HomeService } from '../../services/home/home.service';
import { Carrossel } from '../../models/carrossel.model';
import { UsuariologadoService } from '../../services/usuariologado/usuariologado.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, CardProdutoComponent, MatFormField],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private produtoService: ProdutoService, private usuariologadoService: UsuariologadoService, private homeService: HomeService, private sanitizer: DomSanitizer) {
  }
  currentSlide: number = 0;
  slideInterval: any;

  produtos: Produto[] = [];
  carrossels: Carrossel[] = [];
  listaFavoritos: Produto[] = [];

  ngOnInit() {
    this.usuariologadoService.listgostei().subscribe((data: any[]) => {
      this.listaFavoritos = data;
      this.marcarProdutosFavoritos();
    })
    this.homeService.carrossel().subscribe((data: any[]) => {
      this.carrossels = data;
    });

    this.produtoService.list().subscribe((data: any[]) => {
      this.produtos = data;
      this.marcarProdutosFavoritos();
    });
  }
  marcarProdutosFavoritos() {
    if (this.listaFavoritos.length > 0 && this.produtos.length > 0) {
      this.produtos.forEach(produto => {
        if (this.listaFavoritos.some(favorito => favorito.id === produto.id)) {
          produto.favoritado = true;
        }
      });
    }
  }

  moveSlide(direction: number): void {
    this.currentSlide += direction;
    this.currentSlide = (this.currentSlide + this.carrossels.length) % this.carrossels.length;
    this.resetSlideShow();
  }

  startSlideShow(): void {
    this.slideInterval = setInterval(() => {
      this.moveSlide(1);
    }, 6000);
  }

  resetSlideShow(): void {
    clearInterval(this.slideInterval);
    this.startSlideShow();
  }

  irParaTela(link: String){
      this.router.navigate([link]);
  }

// carregarImagem(nomeImagem: string): SafeUrl {
//   let safeUrl: SafeUrl = '';
//   this.usuariologadoService.baixarImagem(nomeImagem).subscribe(blob => {
//     const url = window.URL.createObjectURL(blob);
//     safeUrl = this.sanitizer.bypassSecurityTrustUrl(url);
//   });
//   return safeUrl;
// }

}
