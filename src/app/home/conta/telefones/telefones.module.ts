import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TelefonesRoutingModule } from './telefones-routing.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TelefonesRoutingModule,
    HttpClientModule
  ]
})
export class TelefonesModule { }
