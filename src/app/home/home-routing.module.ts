import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail/detail.component';
import { FavoritosComponent } from './favoritos/favoritos.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'detail', component: DetailComponent},
  {path: 'favoritos', component: FavoritosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
