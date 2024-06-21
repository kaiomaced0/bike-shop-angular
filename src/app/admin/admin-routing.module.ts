import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmMainLayoutComponent } from './adm-main-layout/adm-main-layout.component';
import { AuthService } from '../services/auth/auth.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    component: AdmMainLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
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
  providers: [AuthService, HttpClientModule]
})
export class AdminRoutingModule { }
