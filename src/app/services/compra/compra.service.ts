import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Compra } from '../../models/compra.model';
import { Observable, tap } from 'rxjs';
import { CompraItemCompra } from '../../models/compraitemcompra.models';
import { ValidaCompra } from '../../models/validacompra.models';

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  private baseUrl = 'http://localhost:8080/compra';
  // private baseUrl = 'http://34.151.236.42:8080/compra';

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

  constructor(private http: HttpClient
     ) { }

  getAll(page:number, pageSize:number): Observable<Compra[]> {
    return this.http.get<Compra[]>(`${this.baseUrl}/${page}/${pageSize}`, this.httpOptions).pipe(
      tap(compra => console.log(compra)));
  }

  count(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/count`,this.httpOptions3);
  }

  valida(compra: CompraItemCompra): Observable<ValidaCompra> {
    return this.http.post<ValidaCompra>(this.baseUrl, compra, this.httpOptions);
  }
  insert(compra: CompraItemCompra): Observable<any> {
    return this.http.post(this.baseUrl, compra, this.httpOptions);
  }


  update(id: number, Compra: Compra): Observable<Compra> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.put<Compra>(url, Compra);
  }

  delete(id: number): Observable<void> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
