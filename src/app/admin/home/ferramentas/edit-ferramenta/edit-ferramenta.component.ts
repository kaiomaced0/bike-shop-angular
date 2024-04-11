import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ferramenta } from '../../../../models/ferramenta.model';
import { FerramentaService } from '../../../../services/ferramenta/ferramenta.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { ConfiermDialogResetarsenhaComponent } from '../../../../components/dialog/confierm-dialog-resetarsenha/confierm-dialog-resetarsenha.component';

@Component({
  selector: 'app-edit-ferramenta',
  standalone: true,
  imports: [FormsModule, MatButton],
  templateUrl: './edit-ferramenta.component.html',
  styleUrl: './edit-ferramenta.component.css'
})
export class EditFerramentaComponent {

  ferramenta: Ferramenta = new Ferramenta();

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private service: FerramentaService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.service.getById(+id).subscribe({
        next: (data) => {
          this.ferramenta = data;
        },
        error: (error) => {
          console.error('Erro ao buscar Ferramenta', error);
        }
      });
    }
  }

  cancelar(){
    this.router.navigate(['/admin/Ferramentas']);
  }

  onSubmit(form: any) {
    console.log('Dados do Formulário:', form.value);
  }

  atualizarFerramenta() {
    const dialogRef = this.dialog.open(ConfiermDialogResetarsenhaComponent, {
      width: '250px',
      data: {
        message: `Tem certeza que deseja atualizar a Ferramenta?`,
      }});
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.service.update(this.ferramenta.id!, this.ferramenta).subscribe({
            next: () => {
              console.log('Ferramenta atualizada com sucesso');
              this.router.navigate(['/admin/ferramentas']);
              this.snackBar.open('Ferramenta atualizada', 'Fechar', {
                duration: 2000,
              });
            },
            error: (erro) => {
              console.error('Erro ao atualizar Ferramenta:', erro);
            }
          });
        }


  });}

}
