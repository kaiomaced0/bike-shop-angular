import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Marca } from '../../models/marca.model';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {

  private baseUrl = '/marca';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJ1bml0aW5zLWp3dCIsInN1YiI6ImthaW8iLCJncm91cHMiOlsiVXNlciIsIkFkbWluIl0sImV4cCI6MTcxMjc4MTc1MCwiaWF0IjoxNzEyNjk1MzUwLCJqdGkiOiJlMTg2MDAwMC02MzE2LTQ2OTQtYjhkYy04MmQ4ZGQyOGUzZjcifQ.QQ_LYon-U45DIiqFuDXtPIKTWD79JWVrxbKyuuwWxZo1uYpXjzcTuW9JN4aj1AlLiw6sf6R8rxRPZ60TZ1IMzyPHAu79vpOhl1k2xux3beHZkxOi56MiaWRwq7Xfl7IMd_9EpOSwX14an2pm_aRDSGmIoudW8H2IyO9-kyBeNy1yxtMXpi9mQJT7d_6wZTd_k5oF9Q3PqOm84AIvzwqueNLFMmbXHxAQ2shEIeg2YCbPWT0Cu6_jXaEn_4ex-Cw1jAkTXkZPZyocMQuqQAOgq1QMVO8-C1k9J_RRCfn1RUueIcT3hnJ6jZ51uWMiFmG6SlrHc3gatiY8a7KC8MAKLg'})
  };


  constructor(private http: HttpClient) { }

  getAll(): Observable<Marca[]> {
    return this.http.get<Marca[]>(this.baseUrl, this.httpOptions).pipe(
      tap(marcas => console.log(marcas)));
  }

  insert(nome: string): Observable<any> {
    return this.http.post<Marca>(this.baseUrl, {nome}, this.httpOptions);
  }

  update(id: number, Marca: Marca): Observable<Marca> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.put<Marca>(url, Marca);
  }

  delete(id: number): Observable<void> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
