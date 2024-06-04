import { Component, Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatList, MatListItem } from '@angular/material/list';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfiermDialogResetarsenhaComponent } from '../../../components/dialog/confierm-dialog-resetarsenha/confierm-dialog-resetarsenha.component';
import { UsuariologadoService } from '../../../services/usuariologado/usuariologado.service';

@Component({
  selector: 'app-card-produto-favorito',
  standalone: true,
  imports: [MatList, MatListItem, MatIcon],
  templateUrl: './card-produto-favorito.component.html',
  styleUrl: './card-produto-favorito.component.css'
})
export class CardProdutoFavoritoComponent {


  constructor(private router: Router, private service: UsuariologadoService, private dialog: MatDialog, private snackBar: MatSnackBar) {
  }

  @Input() id?: number; // Valor padrão para o id
  @Input() imageUrl?: string;
  @Input() title?: string; // Valor padrão para o título
  @Input() price?: number; // Valor padrão para o preço
  @Input() stars?: number; // Valor padrão para a quantidade de estrelas
  @Input() description?: string;

  deletar(){
        this.service.deleteGostei(this.id!).subscribe({
          next: () => {
            this.snackBar.open('Produto deletado', 'Fechar', {
              duration: 2000,
            });
          },
          error: (error) => {
            this.snackBar.open('Erro ao deletar Produto', 'Fechar', {
              duration: 1000,
            });
          }
        });
    }


}
