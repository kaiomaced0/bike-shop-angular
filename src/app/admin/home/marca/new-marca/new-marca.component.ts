import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MarcaService } from '../../../../services/marca/marca.service';
import { Marca } from '../../../../models/marca.model';

@Component({
  selector: 'app-new-marca',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-marca.component.html',
  styleUrl: './new-marca.component.css'
})
export class NewMarcaComponent {

  nome: string = '';

  constructor(private router: Router, private service: MarcaService) {}
  onSubmit(form: any) {
    console.log('Dados do Formulário:', form.value);
  }
  adicionarMarca() {
      this.service.insert(this.nome).subscribe({
        next: (response) => {
          console.log('Marca criada com sucesso:', response);
        },
        error: (error) => {
          console.error('Erro ao criar marca:', error);
        }
      });
    this.router.navigate(['/admin/marcas']);
  }
}
