import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthService } from '../services/auth/auth.service';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { SignComponent } from './sign/sign/sign.component';
import { UsuarioService } from '../services/usuario/usuario.service';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'forgot', component: ForgotPassComponent},
  {path: 'sign', component: SignComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthService, UsuarioService]
})
export class LoginRoutingModule { }
