import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PneusRoutingModule } from './pneus-routing.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PneusRoutingModule,
    HttpClientModule
  ]
})
export class PneusModule { }
