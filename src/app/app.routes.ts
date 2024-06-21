import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth/auth.service';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../../environment';

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'detail',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'favoritos',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'conta',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'servicos',
        loadChildren: () => import('./home/servicos/servicos.module').then(m => m.ServicosModule)
      },
      {
        path: 'pagamento',
        loadChildren: () => import('./home/pagamento/pagamento.module').then(m => m.PagamentoModule)
      }
    ]
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)

  },
  { path: '**', redirectTo: '' },

];

@NgModule({
  imports: [RouterModule.forChild(routes), HttpClientModule],
  exports: [RouterModule],
  providers: [AuthService]
})
export class AppRoutingModule { }
