import { HttpClient, HttpHeaders, HttpClientModule} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { tap } from 'rxjs/operators';
import { Produto } from '../../models/produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private apiUrl = '/produto';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJ1bml0aW5zLWp3dCIsInN1YiI6ImthaW8iLCJncm91cHMiOlsiVXNlciIsIkFkbWluIl0sImV4cCI6MTcxMjc4MTc1MCwiaWF0IjoxNzEyNjk1MzUwLCJqdGkiOiJlMTg2MDAwMC02MzE2LTQ2OTQtYjhkYy04MmQ4ZGQyOGUzZjcifQ.QQ_LYon-U45DIiqFuDXtPIKTWD79JWVrxbKyuuwWxZo1uYpXjzcTuW9JN4aj1AlLiw6sf6R8rxRPZ60TZ1IMzyPHAu79vpOhl1k2xux3beHZkxOi56MiaWRwq7Xfl7IMd_9EpOSwX14an2pm_aRDSGmIoudW8H2IyO9-kyBeNy1yxtMXpi9mQJT7d_6wZTd_k5oF9Q3PqOm84AIvzwqueNLFMmbXHxAQ2shEIeg2YCbPWT0Cu6_jXaEn_4ex-Cw1jAkTXkZPZyocMQuqQAOgq1QMVO8-C1k9J_RRCfn1RUueIcT3hnJ6jZ51uWMiFmG6SlrHc3gatiY8a7KC8MAKLg'})
  };

  httpOptions2 = {
    headers: new HttpHeaders({'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJ1bml0aW5zLWp3dCIsInN1YiI6ImthaW8iLCJncm91cHMiOlsiVXNlciIsIkFkbWluIl0sImV4cCI6MTcxMjc4MTc1MCwiaWF0IjoxNzEyNjk1MzUwLCJqdGkiOiJlMTg2MDAwMC02MzE2LTQ2OTQtYjhkYy04MmQ4ZGQyOGUzZjcifQ.QQ_LYon-U45DIiqFuDXtPIKTWD79JWVrxbKyuuwWxZo1uYpXjzcTuW9JN4aj1AlLiw6sf6R8rxRPZ60TZ1IMzyPHAu79vpOhl1k2xux3beHZkxOi56MiaWRwq7Xfl7IMd_9EpOSwX14an2pm_aRDSGmIoudW8H2IyO9-kyBeNy1yxtMXpi9mQJT7d_6wZTd_k5oF9Q3PqOm84AIvzwqueNLFMmbXHxAQ2shEIeg2YCbPWT0Cu6_jXaEn_4ex-Cw1jAkTXkZPZyocMQuqQAOgq1QMVO8-C1k9J_RRCfn1RUueIcT3hnJ6jZ51uWMiFmG6SlrHc3gatiY8a7KC8MAKLg'})
  };

  constructor(private httpClient: HttpClient) { }

  list(){
    return this.httpClient.get<Produto[]>(this.apiUrl+'/admin', this.httpOptions).pipe(
      tap(produtos => console.log(produtos))
    );
  }

  insert(p: Produto): Observable<Produto> {
    return this.httpClient.post<Produto>(this.apiUrl, p, this.httpOptions);
  }

  delete(id: number): Observable<any> {
    const url = `${this.apiUrl}/delete/${id}`;
    return this.httpClient.patch(url, null, this.httpOptions2);
  }

  getById(id: number): Observable<Produto> {
    const url = `${this.apiUrl}/${id}`;
    return this.httpClient.get<Produto>(url, this.httpOptions);
  }

  update(id: number, p: Produto): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.httpClient.put(url, p, this.httpOptions);
  }
}
