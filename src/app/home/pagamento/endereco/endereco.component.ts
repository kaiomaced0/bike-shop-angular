import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';
import { Endereco } from '../../../models/endereco.models';
import { UsuariologadoService } from '../../../services/usuariologado/usuariologado.service';
import { CarrinhoService } from '../../../services/carrinho/carrinho.service';
import { CompraItemCompra } from '../../../models/compraitemcompra.models';
import { Produto } from '../../../models/produto.model';
import { ItemCompra } from '../../../models/itemcompra.models';
import { ProdutoService } from '../../../services/produto/produto.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatInput, MatInputModule } from '@angular/material/input';
import { CompraService } from '../../../services/compra/compra.service';
import { NgFor, NgIf } from '@angular/common';
import { Cartao } from '../../../models/cartao.model';

@Component({
  selector: 'app-endereco',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormField,
    NgFor,
    NgIf,
    MatInputModule],
  templateUrl: './endereco.component.html',
  styleUrl: './endereco.component.css'
})
export class EnderecoComponent implements OnInit {
  valor: number = 0;
  enderecoForm: FormGroup;
  enderecos: Endereco[] = [];
  itens: ItemCompra[] = [];
  produtos: Produto[] = [];
  listids: number[] = [];
  enderecoSelecionado: Endereco | null = null;
  carrinho?: CompraItemCompra;
  mensagemCupom: string | null = null;
  cartoes: Cartao[] = [];
  formasPagamento = ['PIX', 'Cartão Débito', 'Cartão Crédito', 'Boleto'];
  qauntidadeParcelas = [1,2,3,4,5,6,7,8,9,10,11,12];
  parcela?: number;
  cvc?: number;

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private router: Router,
    private usuariologadoService: UsuariologadoService,
    private carrinhoS: CarrinhoService,
    private compraService: CompraService,
    private snackBar: MatSnackBar,
    private produtoService: ProdutoService
  ) {
    this.enderecoForm = this.fb.group({
      endereco: ['', Validators.required]
    });
  }

  ngOnInit(): void {

    this.usuariologadoService.getEnderecosLista().subscribe((data: Endereco[]) => {
      this.enderecos = data;
    });

    this.itens = this.carrinhoS.getCarrinho();
    this.itens.forEach(i => this.listids.push(i.produtoId!));
    this.produtoService.listIds(this.listids).subscribe(data => {
      this.produtos = data;
      this.getTotal();
    });
    this.carrinho = this.carrinhoS.enviarCompra();

    this.usuariologadoService.getCartoesLista().subscribe((data: Cartao[]) => {
      this.cartoes = data;
    });

  }

  selecionarFormaPagamento(event: any) {
    this.carrinho!.formaPagamento = event.value;
    console.log(event.value);
  }

  selecionarParcela(event: any) {
    this.parcela = event.value;
    console.log(event.value);
  }

  selecionarCvc(event: any) {
    this.cvc = event.value;
    console.log(event.value);
  }

  getTotal() {
    this.valor = 0;
    this.produtos.forEach(element => {
      this.valor = this.valor + (element.preco! * this.getQuantidade(element.id!));
    });
  }
  getQuantidade(produtoId: number): number {
    return this.carrinhoS.getQuantidade(produtoId);
  }
  adicionarEndereco(): void {
    this.router.navigate(['/conta/enderecos']);
  }

  finalizarCompra(): void {
    const enderecoId = this.enderecoForm.get('endereco')?.value;
    this.carrinho!.idEndereco! = enderecoId;
    this.carrinho!.idCupom = this.mensagemCupom!;

    if (this.enderecoForm.valid) {
      console.log(this.carrinho!);

      if (this.carrinho?.formaPagamento == 1 || this.carrinho?.formaPagamento == 4) {

        this.compraService.insert(this.carrinho!).subscribe({
          next: (res) => {
            this.snackBar.open('Compra finalizada com sucesso!', 'Fechar', {
              duration: 4500,
            });

            window.open('https://nubank.com.br/cobrar/ip0ty/6662d24c-3f1f-46f7-84f4-851eb6689a45', '_blank');
            this.carrinhoS.limparCarrinho();
            this.home();
          },
          error: (erro) => {
            this.snackBar.open('Erro ao finalizar a compra', 'Fechar', {
              duration: 2000,
            });
            console.error('Erro ao finalizar a compra:', erro);
          }
        });
      }
      if (this.carrinho?.formaPagamento == 2 || this.carrinho?.formaPagamento == 3) {
        // this.carrinhoS.limparCarrinho();
        // this.home();
      }
    } else {
      this.snackBar.open('Por favor, selecione um endereço.', 'Fechar', {
        duration: 3000,
      });
    }
  }

  home() {
    this.router.navigate(['/']);
  }

  cartao() {
    this.router.navigate(['/pagamento/cartao']);
  }
}
