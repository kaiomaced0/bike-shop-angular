import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { Router } from '@angular/router';
import { FreioService } from '../../../../services/freio/freio.service';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-new-freio',
  standalone: true,
  imports: [MatFormField, FormsModule, MatButton],
  templateUrl: './new-freio.component.html',
  styleUrl: './new-freio.component.css'
})
export class NewFreioComponent {

  nome: string = '';

  cancelar(){
    this.router.navigate(['/admin/freios']);
  }
  constructor(private router: Router, private service: FreioService) {}
  adicionarFreio() {
      this.service.insert(this.nome).subscribe({
        next: (response) => {
          console.log('freio criada com sucesso:', response);
        },
        error: (error) => {
          console.error('Erro ao criar freio:', error);
        }
      });
    this.router.navigate(['/admin/freios']);
  }
}
