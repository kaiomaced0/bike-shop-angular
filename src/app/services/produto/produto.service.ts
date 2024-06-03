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

  private token  = localStorage.getItem('token');

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.token})
  };
  httpOptions2 = {
    headers: new HttpHeaders({'Authorization': 'Bearer ' + this.token})
  };
  httpOptions3 = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };


  constructor(private httpClient: HttpClient) { }

  listAdmin(){
    return this.httpClient.get<Produto[]>(this.apiUrl+'/admin', this.httpOptions).pipe(
      tap(produtos => console.log(produtos))
    );
  }
  list(){
    return this.httpClient.get<Produto[]>(this.apiUrl, this.httpOptions3).pipe(
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

  getByIdAdmin(id: number): Observable<Produto> {
    const url = `${this.apiUrl}/admin/${id}`;
    return this.httpClient.get<Produto>(url, this.httpOptions).pipe(
      tap(produto => console.log(produto))
    );

  }

  update(id: number, p: Produto): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.httpClient.put(url, p, this.httpOptions);
  }
}
