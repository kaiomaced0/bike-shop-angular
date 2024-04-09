import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoriaService } from '../../../../services/categoria/categoria.service';

@Component({
  selector: 'app-new-categoria',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-categoria.component.html',
  styleUrl: './new-categoria.component.css'
})
export class NewCategoriaComponent {


  nome: string = '';

  constructor(private router: Router, private service: CategoriaService) {}
  adicionarCategoria() {
      this.service.insert(this.nome).subscribe({
        next: (response) => {
          console.log('Categoria criada com sucesso:', response);
        },
        error: (error) => {
          console.error('Erro ao criar Categoria:', error);
        }
      });
    this.router.navigate(['/admin/categorias']);
  }
}
