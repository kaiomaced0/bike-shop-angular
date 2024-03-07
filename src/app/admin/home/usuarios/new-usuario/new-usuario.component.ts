import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-usuario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-usuario.component.html',
  styleUrl: './new-usuario.component.css'
})
export class NewUsuarioComponent {
  constructor(private router: Router) {}

  onSubmit(form: any) {
    console.log('Formulário enviado:', form.value);
  }

  adicionarUsuario() {
    this.router.navigate(['/admin/usuarios']);
  }
}
