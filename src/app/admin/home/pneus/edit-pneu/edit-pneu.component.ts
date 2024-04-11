import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import { PneuService } from '../../../../services/pneu/pneu.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { Pneu } from '../../../../models/pneu.model';
import { ConfiermDialogResetarsenhaComponent } from '../../../../components/dialog/confierm-dialog-resetarsenha/confierm-dialog-resetarsenha.component';

@Component({
  selector: 'app-edit-pneu',
  standalone: true,
  imports: [FormsModule, MatButton],
  templateUrl: './edit-pneu.component.html',
  styleUrl: './edit-pneu.component.css'
})
export class EditPneuComponent {


  pneu: Pneu = new Pneu();

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private service: PneuService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.service.getById(+id).subscribe({
        next: (data) => {
          this.pneu = data;
        },
        error: (error) => {
          console.error('Erro ao buscar Pneu', error);
        }
      });
    }
  }

  cancelar(){
    this.router.navigate(['/admin/Pneus']);
  }

  onSubmit(form: any) {
    console.log('Dados do Formulário:', form.value);
  }

  atualizarPneu() {
    const dialogRef = this.dialog.open(ConfiermDialogResetarsenhaComponent, {
      width: '250px',
      data: {
        message: `Tem certeza que deseja atualizar o Pneu?`,
      }});
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.service.update(this.pneu.id!, this.pneu).subscribe({
            next: () => {
              console.log('Pneu atualizado com sucesso');
              this.router.navigate(['/admin/pneus']);
              this.snackBar.open('Pneu atualizado', 'Fechar', {
                duration: 2000,
              });
            },
            error: (erro) => {
              console.error('Erro ao atualizar Pneu:', erro);
            }
          });
        }


  });}

}
