import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cartao } from '../../models/cartao.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartaoService {


  private token  = localStorage.getItem('token');

  // private baseUrl = 'http://localhost:8080/cartao';
  private baseUrl = 'http://34.151.236.42:8080/cartao';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.token})
  };
  httpOptions2 = {
    headers: new HttpHeaders({'Authorization': 'Bearer ' + this.token})
  };
  httpOptions3 = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };


  constructor(private http: HttpClient) { }

  insert(c: Cartao): Observable<Cartao> {
    return this.http.post<Cartao>(this.baseUrl, c, this.httpOptions);
  }

}
