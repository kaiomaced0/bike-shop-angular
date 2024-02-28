import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail/detail.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { ContaComponent } from './conta/conta/conta.component';
import { ContaModule } from './conta/conta.module';
import { ShopCartComponent } from './shop-cart/shop-cart.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'detail', component: DetailComponent},
  {path: 'favoritos', component: FavoritosComponent},
  {path: 'carrinho', component: ShopCartComponent},
  {
    path: 'conta',
    loadChildren: () => import('./conta/conta.module').then(m => m.ContaModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
