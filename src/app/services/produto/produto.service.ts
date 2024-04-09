import { HttpClient, HttpHeaders, HttpClientModule} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { tap } from 'rxjs/operators';
import { Produto } from '../../models/produto.model';
import { ProdutoDTO } from '../../dto/produto.dto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private apiUrl = 'http://localhost:8080/produto';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJ1bml0aW5zLWp3dCIsInN1YiI6ImthaW8iLCJncm91cHMiOlsiVXNlciIsIkFkbWluIl0sImV4cCI6MTcxMjc4MTc1MCwiaWF0IjoxNzEyNjk1MzUwLCJqdGkiOiJlMTg2MDAwMC02MzE2LTQ2OTQtYjhkYy04MmQ4ZGQyOGUzZjcifQ.QQ_LYon-U45DIiqFuDXtPIKTWD79JWVrxbKyuuwWxZo1uYpXjzcTuW9JN4aj1AlLiw6sf6R8rxRPZ60TZ1IMzyPHAu79vpOhl1k2xux3beHZkxOi56MiaWRwq7Xfl7IMd_9EpOSwX14an2pm_aRDSGmIoudW8H2IyO9-kyBeNy1yxtMXpi9mQJT7d_6wZTd_k5oF9Q3PqOm84AIvzwqueNLFMmbXHxAQ2shEIeg2YCbPWT0Cu6_jXaEn_4ex-Cw1jAkTXkZPZyocMQuqQAOgq1QMVO8-C1k9J_RRCfn1RUueIcT3hnJ6jZ51uWMiFmG6SlrHc3gatiY8a7KC8MAKLg'})
  };

  constructor(private httpClient: HttpClient) { }

  list(){
    return this.httpClient.get<Produto[]>(this.apiUrl+'/admin', this.httpOptions).pipe(
      tap(produtos => console.log(produtos))
    );
  }
  getProdutos(): Observable<Produto[]> {
    return this.httpClient.get<Produto[]>(this.apiUrl, this.httpOptions);
  }
  insert(p: ProdutoDTO): Observable<ProdutoDTO> {
    return this.httpClient.post<ProdutoDTO>(this.apiUrl, p, this.httpOptions);
  }
  delete(id: number): void {
    const url = `${this.apiUrl}/delete/${id}`;
    this.httpClient.put(url, this.httpOptions);
  }
}
