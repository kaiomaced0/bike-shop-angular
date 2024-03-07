import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [ReactiveFormsModule,
    CommonModule,
    ProdutosRoutingModule
  ]
})
export class ProdutosModule { }
