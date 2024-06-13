import { HttpClientModule } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UsuariologadoService } from '../../../services/usuariologado/usuariologado.service';
import { SafeUrl } from '@angular/platform-browser';
import { CarrinhoService } from '../../../services/carrinho/carrinho.service';

@Component({
  selector: 'app-card-produto',
  standalone: true,
  imports: [MatCard, MatIcon, HttpClientModule],
  templateUrl: './card-produto.component.html',
  styleUrl: './card-produto.component.css'
})
export class CardProdutoComponent implements OnInit {


  constructor(private router: Router, private service: UsuariologadoService, private snackBar: MatSnackBar, private carrinhoService: CarrinhoService) {
  }
  @Input() id?: number; // Valor padrão para o id
  @Input() imageUrl?: SafeUrl = 'https://placehold.co/220x200/gray/white?text=Produto';
  @Input() title: string = 'Produto Padrão'; // Valor padrão para o título
  @Input() price: number = 0.00; // Valor padrão para o preço
  @Input() stars: number = 0; // Valor padrão para a quantidade de estrelas
  @Input() favoritado: boolean = false;

  ngOnInit(): void {
      if(this.imageUrl == null || this.imageUrl == ''){
        this.imageUrl = 'https://placehold.co/220x200/gray/white?text=Produto';
      }
  }
  curtir() {
    if (this.favoritado) {

      this.service.removeGostei(this.id!).subscribe({
        next: () => {
          window.location.reload();
        },
        error: (error) => {
          this.snackBar.open('Erro ao remover Produto', 'Fechar', {
            duration: 1000,
          });
        }
      });

    } else {
      this.service.insertGostei(this.id!).subscribe({
        next: () => {
          window.location.reload();
        },
        error: (error) => {
          this.snackBar.open('Erro ao favoritar Produto', 'Fechar', {
            duration: 1000,
          });
        }
      });
    }
  }

  comprar() {
    this.carrinhoService.adicionarProduto(this.id!);
  }


  irParaDetail() {
    this.router.navigate(['/detail/' + this.id]);
  }


}
