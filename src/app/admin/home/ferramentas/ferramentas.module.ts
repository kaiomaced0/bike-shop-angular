import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FerramentasRoutingModule } from './ferramentas-routing.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FerramentasRoutingModule, HttpClientModule
  ]
})
export class FerramentasModule { }
