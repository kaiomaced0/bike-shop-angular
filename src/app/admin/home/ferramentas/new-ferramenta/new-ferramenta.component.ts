import { Component } from '@angular/core';
import { Ferramenta } from '../../../../models/ferramenta.model';
import { Router } from '@angular/router';
import { FerramentaService } from '../../../../services/ferramenta/ferramenta.service';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-new-ferramenta',
  standalone: true,
  imports: [FormsModule, MatButton],
  templateUrl: './new-ferramenta.component.html',
  styleUrl: './new-ferramenta.component.css'
})
export class NewFerramentaComponent {
  ferramenta: Ferramenta = new Ferramenta();

  cancelar(){
    this.router.navigate(['/admin/ferramentas']);
  }

  constructor(private router: Router, private service: FerramentaService) {
  }
  adicionarFerramenta() {
    this.ferramenta!.idCor = 1;
    this.ferramenta!.idMarca = 1;
    this.ferramenta!.img = [];
    this.service.insert(this.ferramenta!).subscribe({
      next: (FerramentaAdicionado) => {
        console.log('Ferramenta adicionado com sucesso:', FerramentaAdicionado);
        this.router.navigate(['/admin/ferramentas']);
      },
      error: (erro) => {
        console.error('Erro ao adicionar Ferramenta:', erro, this.ferramenta!);
      }
    });
  }

}
