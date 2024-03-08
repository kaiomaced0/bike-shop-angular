import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-cupom',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-cupom.component.html',
  styleUrl: './new-cupom.component.css'
})
export class NewCupomComponent {
  constructor(private router: Router) {}
  categorias = ['Categoria 1', 'Categoria 2', 'Categoria 3', 'Categoria 4', 'Categoria 5'];

  onSubmit(form: any) {
    console.log('Dados do Formulário:', form.value);
    // Aqui você pode adicionar a lógica para salvar os dados do formulário
  }
  adicionarCupom() {
    this.router.navigate(['/admin/cupons']);
  }

}
