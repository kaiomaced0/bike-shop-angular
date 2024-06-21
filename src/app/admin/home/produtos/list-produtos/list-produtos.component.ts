import { Component, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';
import { Produto } from '../../../../models/produto.model';
import { HttpClientModule } from '@angular/common/http';
import { ProdutoService } from '../../../../services/produto/produto.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfiermDialogResetarsenhaComponent } from '../../../../components/dialog/confierm-dialog-resetarsenha/confierm-dialog-resetarsenha.component';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { AuthService } from '../../../../services/auth/auth.service';

@Component({
  selector: 'app-list-produtos',
  standalone: true,
  imports: [MatIcon, MatButton, HttpClientModule, MatPaginatorModule],
  templateUrl: './list-produtos.component.html',
  styleUrl: './list-produtos.component.css'
})
export class ListProdutosComponent implements OnInit {

  constructor(
    private router: Router,
    private produtoService: ProdutoService,
    private dialog: MatDialog,
    private authService: AuthService,
    private snackBar: MatSnackBar) {
  }

  produtos: Produto[] = [];
  pageSize = 10;
  page = 0;
  totalRecords = 0;


  ngOnInit() {

    this.authService.verificaAdmin().subscribe(data => {
      if(data == false){
        this.irParaHome();
        this.snackBar.open('Não autorizado!', 'Fechar', {
          duration: 2000,
        });
      }
    });
    this.produtoService.listAdmin(this.page, this.pageSize).subscribe((data: Produto[]) => {
      this.produtos = data;
    });
    this.produtoService.count().subscribe(data => {
      this.totalRecords = data;
      console.log(this.totalRecords);
    });
  }
  editar(id: number) {
    this.router.navigate([`/admin/produtos/edit/${id}`]);
  }

  irParaNewProduto() {
    this.router.navigate(['/admin/produtos/new']);
  }

  irParaHome(){
    this.router.navigate(['']);
  }


  deletar(id: number, nome: string) {
    const dialogRef = this.dialog.open(ConfiermDialogResetarsenhaComponent, {
      width: '250px',
      data: {
        message: `Tem certeza que deseja Deletar o Produto de nome: ${nome}?`,
        n: nome
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.produtoService.delete(id).subscribe({
          next: () => {
            this.snackBar.open('Produto deletado', 'Fechar', {
              duration: 2000,
            });
            this.ngOnInit();
          },
          error: (error) => {
            this.snackBar.open('Erro ao deletar Produto', 'Fechar', {
              duration: 1000,
            });
          }
        });
      }
    });
  }
  paginar(event: PageEvent): void {
    this.page = event.pageIndex;
    this.pageSize = event.pageSize;
    this.ngOnInit();
  }

}
