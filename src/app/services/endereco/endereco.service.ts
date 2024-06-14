import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Endereco } from '../../models/endereco.models';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {
  // private apiUrl = 'http://localhost:8080/endereco';
  private apiUrl = 'http://172.20.0.3:8080/endereco';

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
    return this.httpClient.get<Endereco[]>(this.apiUrl+'/admin', this.httpOptions).pipe(
      tap(e => console.log(e))
    );
  }
  list(){
    return this.httpClient.get<Endereco[]>(this.apiUrl, this.httpOptions3).pipe(
      tap(Enderecos => console.log(Enderecos))
    );
  }
  insert(p: Endereco): Observable<Endereco> {
    return this.httpClient.post<Endereco>(this.apiUrl, p, this.httpOptions);
  }

  delete(id: number): Observable<any> {
    const url = `${this.apiUrl}/delete/${id}`;
    return this.httpClient.patch(url, null, this.httpOptions2);
  }


  update(id: number, p: Endereco): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.httpClient.put(url, p, this.httpOptions);
  }
}
