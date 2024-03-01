import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdmMainLayoutComponent } from '../adm-main-layout/adm-main-layout.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'produtos',
    children: [
      {
        path: '',
        loadChildren: () => import('./produtos/produtos.module').then(m => m.ProdutosModule)
      },
    ]
  },
  {
    path: 'ajustes-home',
    children: [
      {
        path: '',
        loadChildren: () => import('./ajustes-home/ajustes-home.module').then(m => m.AjustesHomeModule)
      },
    ]
  },
  {
    path: 'categorias',
    children: [
      {
        path: '',
        loadChildren: () => import('./categorias/categorias.module').then(m => m.CategoriasModule)
      },
    ]
  },
  {
    path: 'cupons',
    children: [
      {
        path: '',
        loadChildren: () => import('./cupons/cupons.module').then(m => m.CuponsModule)
      },
    ]
  },
  {
    path: 'destaques',
    children: [
      {
        path: '',
        loadChildren: () => import('./destaques/destaques.module').then(m => m.DestaquesModule)
      },
    ]
  },
  {
    path: 'entregas',
    children: [
      {
        path: '',
        loadChildren: () => import('./entregas/entregas.module').then(m => m.EntregasModule)
      },
    ]
  },
  {
    path: 'estoque',
    children: [
      {
        path: '',
        loadChildren: () => import('./estoque/estoque.module').then(m => m.EstoqueModule)
      },
    ]
  },
  {
    path: 'pedidos',
    children: [
      {
        path: '',
        loadChildren: () => import('./pedidos/pedidos.module').then(m => m.PedidosModule)
      },
    ]
  },
  {
    path: 'usuarios',
    children: [
      {
        path: '',
        loadChildren: () => import('./usuarios/usuarios.module').then(m => m.UsuariosModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
