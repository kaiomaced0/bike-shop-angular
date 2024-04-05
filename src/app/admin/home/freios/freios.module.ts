import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreiosRoutingModule } from './freios-routing.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FreiosRoutingModule,
    HttpClientModule
  ]
})
export class FreiosModule { }
