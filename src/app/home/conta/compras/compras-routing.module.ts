import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComprasListComponent } from './compras-list/compras-list/compras-list.component';
import { UsuariologadoService } from '../../../services/usuariologado/usuariologado.service';
import { DetalhesCompraComponent } from './detalhes-compra/detalhes-compra/detalhes-compra.component';

const routes: Routes = [
  {path: '', component: ComprasListComponent},
  {path: 'detalhes/:id', component: DetalhesCompraComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [UsuariologadoService]
})
export class ComprasRoutingModule { }
