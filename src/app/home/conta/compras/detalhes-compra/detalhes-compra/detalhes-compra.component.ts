import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CompraService } from '../../../../../services/compra/compra.service';
import { UsuariologadoService } from '../../../../../services/usuariologado/usuariologado.service';
import { Compra } from '../../../../../models/compra.model';
import { MatButton } from '@angular/material/button';
import { MatLabel } from '@angular/material/form-field';

@Component({
  selector: 'app-detalhes-compra',
  standalone: true,
  imports: [MatButton, MatLabel],
  templateUrl: './detalhes-compra.component.html',
  styleUrl: './detalhes-compra.component.css'
})
export class DetalhesCompraComponent implements OnInit {
  compra: Compra = new Compra();
  constructor(
    private activatedRoute: ActivatedRoute, private router: Router, private snackBar: MatSnackBar, private usuarioLogadoService: UsuariologadoService){
  }
  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.usuarioLogadoService.getCompraId(id!).subscribe((data: Compra) => {
      console.log(data);
      this.compra = data;
    });

  }

  voltar() {
    this.router.navigate(['/conta/compras']);
  }
}
