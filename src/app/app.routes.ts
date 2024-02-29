import { Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { AdmMainLayoutComponent } from './admin/adm-main-layout/adm-main-layout.component';

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
      }
    ]
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)

  },
  { path: '**', redirectTo: '' },

];
