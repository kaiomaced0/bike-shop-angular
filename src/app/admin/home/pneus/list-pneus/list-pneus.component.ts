import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';
import { PneuService } from '../../../../services/pneu/pneu.service';
import { Pneu } from '../../../../models/pneu.model';

@Component({
  selector: 'app-list-pneus',
  standalone: true,
  imports: [MatIcon, MatButton, HttpClientModule],
  templateUrl: './list-pneus.component.html',
  styleUrl: './list-pneus.component.css'
})
export class ListPneusComponent {


  constructor(private router: Router, private service: PneuService) {
  }

  pneus: Pneu[] = [];

  ngOnInit() {
    this.service.getAll().subscribe((data: Pneu[]) => {
      this.pneus = data;
    });
  }


  irParaNewPneu() {
    this.router.navigate(['/admin/pneus/new']);
  }
  editarPneu(pneuId: number) {
    this.router.navigate(['/admin/pneus/edit']);
  }

  excluirPneu(pneuId: number) {
    // Lógica para excluir o pneu
  }

}
