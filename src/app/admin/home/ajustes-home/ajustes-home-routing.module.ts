import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjustesHomeComponent } from './ajustes-home/ajustes-home.component';

const routes: Routes = [
  {path: '', component: AjustesHomeComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AjustesHomeRoutingModule { }
