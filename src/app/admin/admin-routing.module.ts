import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmMainLayoutComponent } from './adm-main-layout/adm-main-layout.component';
import { AuthService } from '../services/auth/auth.service';

const routes: Routes = [
  {
    path: '',
    component: AdmMainLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
        canActivate: []
      },
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthService]
})
export class AdminRoutingModule { }
