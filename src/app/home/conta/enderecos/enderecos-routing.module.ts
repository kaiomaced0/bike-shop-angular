import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnderecosComponent } from './enderecos/enderecos.component';
import { AddEnderecoComponent } from './add-endereco/add-endereco.component';
import { EditEnderecoComponent } from './edit-endereco/edit-endereco.component';

const routes: Routes = [
  {
    path: '', component: EnderecosComponent
  },
  {
    path: 'add', component: AddEnderecoComponent
  },
  {path: 'edit/:id', component: EditEnderecoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnderecosRoutingModule { }
