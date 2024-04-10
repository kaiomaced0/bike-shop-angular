import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from '../../../../services/produto/produto.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { Produto } from '../../../../models/produto.model';

@Component({
  selector: 'app-edit-produto',
  standalone: true,
  imports: [FormsModule, MatButton],
  templateUrl: './edit-produto.component.html',
  styleUrl: './edit-produto.component.css'
})
export class EditProdutoComponent {


  produto: Produto = new Produto();

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private service: ProdutoService, private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.service.getById(+id).subscribe({
        next: (data) => {
          this.produto = data;
        },
        error: (error) => {
          console.error('Erro ao buscar produto', error);
        }
      });
    }
  }

  cancelar(){
    this.router.navigate(['/admin/produtos']);
  }

  onSubmit(form: any) {
    console.log('Dados do Formulário:', form.value);
  }

  atualizarProduto() {
    this.service.update(this.produto.id!, this.produto).subscribe({
      next: () => {
        console.log('Produto atualizado com sucesso');
        this.router.navigate(['/admin/produtos']);
        this.snackBar.open('Produto atualizado', 'Fechar', {
          duration: 2000,
        });
      },
      error: (erro) => {
        console.error('Erro ao atualizar Produto:', erro);
      }
    });
  }
}
