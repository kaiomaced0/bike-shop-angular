import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail/detail.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { ShopCartComponent } from './shop-cart/shop-cart.component';
import { SearchComponent } from './search/search.component';
import { ProdutoService } from '../services/produto/produto.service';
import { HomeService } from '../services/home/home.service';
import { UsuariologadoService } from '../services/usuariologado/usuariologado.service';
import { CarrinhoService } from '../services/carrinho/carrinho.service';
import { CompraService } from '../services/compra/compra.service';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'detail/:id', component: DetailComponent},
  {path: 'favoritos', component: FavoritosComponent},
  {path: 'carrinho', component: ShopCartComponent},
  {path: 'search/:search', component: SearchComponent},
  {
    path: 'conta',
    loadChildren: () => import('./conta/conta.module').then(m => m.ContaModule)
  },
  {
    path: 'servicos',
    loadChildren: () => import('./servicos/servicos.module').then(m => m.ServicosModule)
  },
  {
    path: 'pagamento',
    loadChildren: () => import('./pagamento/pagamento.module').then(m => m.PagamentoModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule],
  providers: [ProdutoService, HomeService, UsuariologadoService, CarrinhoService, CompraService]
})
export class HomeRoutingModule { }
