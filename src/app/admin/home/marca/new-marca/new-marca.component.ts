import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MarcaService } from '../../../../services/marca/marca.service';
import { Marca } from '../../../../models/marca.model';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-new-marca',
  standalone: true,
  imports: [FormsModule, MatButton],
  templateUrl: './new-marca.component.html',
  styleUrl: './new-marca.component.css'
})
export class NewMarcaComponent {

  nome: string = '';

  cancelar(){
    this.router.navigate(['/admin/marcas']);
  }

  constructor(private router: Router, private service: MarcaService) {}
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
