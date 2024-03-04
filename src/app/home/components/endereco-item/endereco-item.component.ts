import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-endereco-item',
  standalone: true,
  imports: [MatIcon],
  templateUrl: './endereco-item.component.html',
  styleUrl: './endereco-item.component.css'
})
export class EnderecoItemComponent {
  @Input() nome?: string;
  @Input() cidade?: string;
  @Input() cep?: string;
  @Input() complemento?: string;
  @Input() numero?: string;
  @Output() acaoPadrao = new EventEmitter<void>();
  
  definirEnderecoComoPadrao() {

    console.log('Endereço definido como padrão');
  }

}
