import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-produto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-produto.component.html',
  styleUrl: './new-produto.component.css'
})
export class NewProdutoComponent{
  constructor(private router: Router) {}
  categorias = ['Categoria 1', 'Categoria 2', 'Categoria 3', 'Categoria 4', 'Categoria 5'];

  onSubmit(form: any) {
    console.log('Dados do Formulário:', form.value);
    // Aqui você pode adicionar a lógica para salvar os dados do formulário
  }
  adicionarProduto() {
    this.router.navigate(['/admin/produtos']);
  }
}
