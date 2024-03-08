import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-pedidos',
  standalone: true,
  imports: [MatIcon, MatButton],
  templateUrl: './list-pedidos.component.html',
  styleUrl: './list-pedidos.component.css'
})
export class ListPedidosComponent {
  constructor(private router: Router) {}


  pedidos = [
    {"id": 1, "usuario": "123.456.789-00", "status": "Entregue" , "dataPrevista": "12/04/2024","codigo": "0000sadsad4", "produtos": 15},
    {"id": 2, "usuario": "987.654.321-00", "status": "Entregue" , "dataPrevista": "18/04/2024","codigo": "cacdscc4", "produtos": 23},
    {"id": 3, "usuario": "055.628.492-59", "status": "Entregue" , "dataPrevista": "22/04/2024","codigo": "3312f12ds4fds", "produtos": 10},
    {"id": 4, "usuario": "070.860.363-74", "status": "Entregue" , "dataPrevista": "14/05/2024","codigo": "565454dsd", "produtos": 45},
    {"id": 5, "usuario": "083.168.341-46", "status": "Entregue" , "dataPrevista": "2/06/2024","codigo": "114d5s4d4s", "produtos": 1}]

}
