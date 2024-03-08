import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-categoria',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-categoria.component.html',
  styleUrl: './new-categoria.component.css'
})
export class NewCategoriaComponent {

  constructor(private router: Router) {}

  onSubmit(form: any) {
    console.log('Dados do Formulário:', form.value);
    // Aqui você pode adicionar a lógica para salvar os dados do formulário
  }
  adicionarCategoria() {
    this.router.navigate(['/admin/categorias']);
  }
}
