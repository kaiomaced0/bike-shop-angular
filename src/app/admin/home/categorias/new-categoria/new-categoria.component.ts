import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoriaService } from '../../../../services/categoria/categoria.service';
import { MatButton } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-new-categoria',
  standalone: true,
  imports: [FormsModule, MatButton],
  templateUrl: './new-categoria.component.html',
  styleUrl: './new-categoria.component.css'
})
export class NewCategoriaComponent {


  nome: string = '';

  cancelar(){
    this.router.navigate(['/admin/categorias']);
  }

  constructor(private router: Router, private service: CategoriaService, private snackBar: MatSnackBar) {}
  adicionarCategoria() {
      this.service.insert(this.nome).subscribe({
        next: (response) => {
          console.log('Categoria criada com sucesso:', response);
          this.snackBar.open('Categoria Adicionada', 'Fechar', {
            duration: 2000,
          });
        },
        error: (error) => {
          console.error('Erro ao criar Categoria:', error);
        }
      });
    this.router.navigate(['/admin/categorias']);
  }
}
