import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-entregas',
  standalone: true,
  imports: [MatIcon, MatButton],
  templateUrl: './list-entregas.component.html',
  styleUrl: './list-entregas.component.css'
})
export class ListEntregasComponent {
  constructor(private router: Router) {}


  entregas = [
    {"id": 100, "pedido": "10", "status": "Entregue" , "dataPrevista": "12/04/2024", "dataEntregue": "08/03/2024"},
    {"id": 101, "pedido": "11", "status": "Em rota" , "dataPrevista": "18/04/2024", "dataEntregue": ""},
    {"id": 102, "pedido": "11", "status": "Em rota" , "dataPrevista": "22/04/2024", "dataEntregue": ""},
    {"id": 103, "pedido": "13", "status": "Em rota" , "dataPrevista": "14/05/2024", "dataEntregue": ""},
    {"id": 104, "pedido": "14", "status": "Em rota" , "dataPrevista": "2/06/2024", "dataEntregue": ""}

  ];


}
