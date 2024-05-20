import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { CardProdutoComponent } from '../../components/card-produto/card-produto.component';
import { CarroselHomeComponent } from '../../components/carrosel-home/carrosel-home.component';
import { MatFormField } from '@angular/material/form-field';
import { Router } from '@angular/router';
import { ProdutoService } from '../../services/produto/produto.service';
import { Produto } from '../../models/produto.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, CardProdutoComponent, CarroselHomeComponent, MatFormField],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private produtoService: ProdutoService) {
  }

  produtos: Produto[] = [];

  ngOnInit() {
    this.produtoService.list().subscribe((data: Produto[]) => {
      this.produtos = data;
    });
  }
}
