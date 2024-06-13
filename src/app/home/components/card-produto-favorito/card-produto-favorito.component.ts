import { Component, Input, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatList, MatListItem } from '@angular/material/list';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsuariologadoService } from '../../../services/usuariologado/usuariologado.service';
import { CarrinhoService } from '../../../services/carrinho/carrinho.service';

@Component({
  selector: 'app-card-produto-favorito',
  standalone: true,
  imports: [MatList, MatListItem, MatIcon],
  templateUrl: './card-produto-favorito.component.html',
  styleUrl: './card-produto-favorito.component.css'
})
export class CardProdutoFavoritoComponent implements OnInit{


  constructor(private router: Router, private service: UsuariologadoService, private dialog: MatDialog, private snackBar: MatSnackBar, private carrinhoService: CarrinhoService) {
  }

  @Input() id?: number; // Valor padrão para o id
  @Input() imageUrl?: string;
  @Input() title?: string; // Valor padrão para o título
  @Input() price?: number; // Valor padrão para o preço
  @Input() stars?: number; // Valor padrão para a quantidade de estrelas
  @Input() description?: string;

  ngOnInit(): void {

    if(this.imageUrl == null || this.imageUrl == ''){
      this.imageUrl = 'https://placehold.co/220x200/gray/white?text=Produto';
    }
  }
  deletar(){
        this.service.deleteGostei(this.id!).subscribe({
          next: () => {
            this.snackBar.open('Produto deletado', 'Fechar', {
              duration: 2000,
            });
            window.location.reload();
          },
          error: (error) => {
            this.snackBar.open('Erro ao deletar Produto', 'Fechar', {
              duration: 1000,
            });
          }
        });
    }

    comprar() {
      this.carrinhoService.adicionarProduto(this.id!);
    }


}
