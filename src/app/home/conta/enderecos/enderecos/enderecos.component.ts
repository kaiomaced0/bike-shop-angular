import { Component } from '@angular/core';
import { EnderecoItemComponent } from '../../../components/endereco-item/endereco-item.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-enderecos',
  standalone: true,
  imports: [EnderecoItemComponent],
  templateUrl: './enderecos.component.html',
  styleUrl: './enderecos.component.css'
})
export class EnderecosComponent {

  enderecos = [
    {
      id: '1',
      nome: 'Casa',
      cidade: 'São Paulo',
      cep: '01000-000',
      complemento: 'Apartamento 101',
      numero: '123'
    },
    {
      id: '2',
      nome: 'Trabalho',
      cidade: 'Rio de Janeiro',
      cep: '20000-000',
      complemento: 'Sala 201',
      numero: '456'
    },
    {
      id: '3',
      nome: 'Casa de Praia',
      cidade: 'Salvador',
      cep: '40000-000',
      complemento: 'Casa',
      numero: '789'
    }
  ];

  definirComoPadrao(id: string) {
    console.log("Definindo como endereço padrão:", id);
    // Implemente a lógica para definir o endereço como padrão aqui
  }
}
