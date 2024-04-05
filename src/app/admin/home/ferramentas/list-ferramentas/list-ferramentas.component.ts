import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';
import { FerramentaService } from '../../../../services/ferramenta/ferramenta.service';
import { Ferramenta } from '../../../../models/ferramenta.model';

@Component({
  selector: 'app-list-ferramentas',
  standalone: true,
  imports: [MatIcon, MatButton, HttpClientModule],
  templateUrl: './list-ferramentas.component.html',
  styleUrl: './list-ferramentas.component.css'
})
export class ListFerramentasComponent {


  constructor(private router: Router, private ferramentaService: FerramentaService) {
  }

  ferramentas: Ferramenta[] = [];

  ngOnInit() {
    this.ferramentaService.getAll().subscribe((data: Ferramenta[]) => {
      this.ferramentas = data;
    });
  }
  irParaNewFerramenta() {
    this.router.navigate(['/admin/ferramentas/new']);
  }
  editarFerramenta(ferramentaId: number) {
    this.router.navigate(['/admin/ferramentas/edit']);
  }

  excluirFerramenta(ferramentaId: number) {
    // Lógica para excluir o ferramenta
  }

}
