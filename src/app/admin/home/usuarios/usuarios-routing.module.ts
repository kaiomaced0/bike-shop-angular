import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUsuariosComponent } from './list-usuarios/list-usuarios.component';
import { NewUsuarioComponent } from './new-usuario/new-usuario.component';
import { EditUsuarioComponent } from './edit-usuario/edit-usuario.component';
import { ViewUsuarioComponent } from './view-usuario/view-usuario.component';

const routes: Routes = [
  {path: '', component: ListUsuariosComponent},
  {path: 'new', component: NewUsuarioComponent},
  {path: 'edit', component: EditUsuarioComponent},
  {path: 'view', component: ViewUsuarioComponent},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
