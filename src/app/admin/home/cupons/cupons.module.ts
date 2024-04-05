import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CuponsRoutingModule } from './cupons-routing.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CuponsRoutingModule, HttpClientModule
  ]
})
export class CuponsModule { }
