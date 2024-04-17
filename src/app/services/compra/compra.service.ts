import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Compra } from '../../models/compra.model';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompraService {
  private baseUrl = '/compra';

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
