import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto } from '../../models/produto.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from '../../services/produto/produto.service';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})

export class DetailComponent implements OnInit{
  produto: Produto = new Produto();

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private service: ProdutoService
  ) {}

  ngOnInit(): void {
    console.log(this.produto);
    this.produto.categoriasId = [];
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.service.getById(+id).subscribe({
        next: (data) => {
          this.produto = data;
        },
        error: (error) => {
          console.error('Erro ao buscar produto', error);
        }
      });
    }
  }


  changeImage(imageUrl: string): void {
    // Lógica para alterar a imagem principal
    console.log('Mudar imagem principal para:', "bike.jpg");
  }

}
