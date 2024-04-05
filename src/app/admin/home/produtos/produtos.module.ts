import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [ReactiveFormsModule,
    CommonModule,
    ProdutosRoutingModule, HttpClientModule
  ]
})
export class ProdutosModule { }
