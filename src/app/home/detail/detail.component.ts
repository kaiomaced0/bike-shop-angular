import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto } from '../../models/produto.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from '../../services/produto/produto.service';
import { CarrinhoService } from '../../services/carrinho/carrinho.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsuariologadoService } from '../../services/usuariologado/usuariologado.service';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})

export class DetailComponent implements OnInit {
  produto: Produto = new Produto();

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private service: ProdutoService,
    private snackBar: MatSnackBar,
    private carrinhoService: CarrinhoService,
    private usuarioService: UsuariologadoService
  ) { }

  ngOnInit(): void {
    console.log(this.produto);
    this.produto.categoriasId = [];
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.service.getById(+id).subscribe({
        next: (data) => {
          this.produto = data;

          if (this.produto.img == null || this.produto.img.length == 0) {
            this.produto.img! = ['https://placehold.co/220x200/gray/white?text=Produto']
          }
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

  curtir() {
    this.usuarioService.insertGostei(this.produto.id!).subscribe({
      next: () => {
        this.snackBar.open('Produto adicionado a Favoritos', 'Fechar', {
          duration: 2000,
        });
      },
      error: (error) => {
        this.snackBar.open('Erro ao favoritar Produto', 'Fechar', {
          duration: 1000,
        });
      }
    });
  }

  comprar() {
    this.carrinhoService.adicionarProduto(this.produto.id!)
  }
}
