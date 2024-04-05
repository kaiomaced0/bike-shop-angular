import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';
import { Cupom } from '../../../../models/cupom.model';
import { CupomService } from '../../../../services/cupom/cupom.service';

@Component({
  selector: 'app-list-cupons',
  standalone: true,
  imports: [MatIcon, MatButton],
  templateUrl: './list-cupons.component.html',
  styleUrl: './list-cupons.component.css'
})
export class ListCuponsComponent {


  constructor(private router: Router, private service: CupomService) {
  }

  cupons: Cupom[] = [];

  ngOnInit() {
    this.service.getAll().subscribe((data: Cupom[]) => {
      this.cupons = data;
    });
  }

  irParaNewCupom() {
    this.router.navigate(['/admin/cupons/new']);
  }
  editarCupom(cupomId: number) {
    this.router.navigate(['/admin/cupons/edit']);
  }

  excluirCupom(cupomId: number) {
    // Lógica para excluir o cupom
  }

}
