import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';
import { FreioService } from '../../../../services/freio/freio.service';
import { Freio } from '../../../../models/freio.model';

@Component({
  selector: 'app-list-freios',
  standalone: true,
  imports: [MatIcon, MatButton, HttpClientModule],
  templateUrl: './list-freios.component.html',
  styleUrl: './list-freios.component.css'
})
export class ListFreiosComponent {


  constructor(private router: Router, private freioService: FreioService) {
  }

  freios: Freio[] = [];

  ngOnInit() {
    this.freioService.getAll().subscribe((data: Freio[]) => {
      this.freios = data;
    });
  }

  irParaNewFreio() {
    this.router.navigate(['/admin/freios/new']);
  }
  editarFreio(freioId: number) {
    this.router.navigate(['/admin/freios/edit']);
  }

  excluirFreio(freioId: number) {
    // Lógica para excluir o freio
  }

}
