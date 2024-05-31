import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { CardProdutoComponent } from '../components/card-produto/card-produto.component';
import { MatFormField } from '@angular/material/form-field';
import { Router } from '@angular/router';
import { ProdutoService } from '../../services/produto/produto.service';
import { Produto } from '../../models/produto.model';
import { UsuariologadoService } from '../../usuariologado/usuariologado.service';
import { HomeService } from '../../services/home/home.service';
import { Carrossel } from '../../models/carrossel.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, CardProdutoComponent, MatFormField],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private produtoService: ProdutoService, private usuariologadoService: UsuariologadoService, private homeService: HomeService) {
  }
  currentSlide: number = 0;
  slideInterval: any;

  produtos: Produto[] = [];
  carrossels: Carrossel[] = [];

  ngOnInit() {
    this.homeService.carrossel().subscribe((data: Carrossel[]) => {
      this.carrossels = data;
    });
    this.produtoService.list().subscribe((data: Produto[]) => {
      this.produtos = data;
    });
    this.startSlideShow();
  }
  moveSlide(direction: number): void {
    this.currentSlide += direction;
    this.currentSlide = (this.currentSlide + 3) % 3; // Assumindo 3 slides
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
      this.router.navigate(['link']);
  }
}
