import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto } from '../../models/produto.model';
import { ProdutoService } from '../../services/produto/produto.service';
import { CardProdutoComponent } from '../components/card-produto/card-produto.component';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CardProdutoComponent, MatPaginatorModule, MatIcon, MatInput, MatButtonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {

  produtos: Produto[] = [];
  query?: string;
  pageSize = 10;
  page = 0;
  totalRecords = 0;

  constructor(
    private route: ActivatedRoute,
    private produtoService: ProdutoService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.query = params.get('search')!;
      this.pesquisar(this.query);

      this.produtoService.getByNomeCount(this.query).subscribe(data => {
        this.totalRecords = data;
        console.log(this.totalRecords);
      });
    });
  }

  paginar(event: PageEvent): void {
    this.page = event.pageIndex;
    this.pageSize = event.pageSize;
    this.ngOnInit();
  }
  pesquisar(query: string): void {
    this.produtoService.getByNome(query, this.page, this.pageSize).subscribe(produtos => {
      this.produtos = produtos;
    });
  }
}
