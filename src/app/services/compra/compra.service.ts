import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Compra } from '../../models/compra.model';
import { Observable, tap } from 'rxjs';
import { CompraItemCompra } from '../../models/compraitemcompra.models';

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  // private baseUrl = 'http://localhost:8080/compra';
  private baseUrl = 'http://34.151.200.157:8080/compra';

  private token  = localStorage.getItem('token');

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.token})
  };
  httpOptions2 = {
    headers: new HttpHeaders({'Authorization': 'Bearer ' + this.token})
  };

  constructor(private http: HttpClient) { }

  getAll(): Observable<Compra[]> {
    return this.http.get<Compra[]>(this.baseUrl, this.httpOptions).pipe(
      tap(compra => console.log(compra)));
  }

  enviarCompra(compra: CompraItemCompra): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post(this.baseUrl, compra, httpOptions);
  }

  insert(Compra: Compra): Observable<Compra> {
    return this.http.post<Compra>(this.baseUrl, Compra);
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
