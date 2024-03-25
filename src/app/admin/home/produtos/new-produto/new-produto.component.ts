import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatOption, MatSelect } from '@angular/material/select';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-produto',
  standalone: true,
  imports: [FormsModule, MatFormField, MatSelect, MatLabel, MatOption],
  templateUrl: './new-produto.component.html',
  styleUrl: './new-produto.component.css'
})
export class NewProdutoComponent{
  constructor(private router: Router) {}
  categorias = ['Categoria 1', 'Categoria 2', 'Categoria 3', 'Categoria 4', 'Categoria 5'];
  cores = ['VERMELHO', 'AZUL', 'AMARELO'];
  marcas = ['Marca 1', 'Marca 2', 'Marca 3'];

  onSubmit(form: any) {
    console.log('Dados do Formulário:', form.value);
    // Aqui você pode adicionar a lógica para salvar os dados do formulário
  }
  adicionarProduto() {
    this.router.navigate(['/admin/produtos']);
  }
}
