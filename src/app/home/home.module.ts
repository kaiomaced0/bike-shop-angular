import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../../../environment';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeRoutingModule, HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase)
  ]
})
export class HomeModule { }
