import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cidade } from '../../models/cidade.models';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CidadeService {
  // private apiUrl = 'http://localhost:8080/cidade';
  private apiUrl = 'http://172.19.0.4:8080/cidade';

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

  list(){
    return this.httpClient.get<Cidade[]>(this.apiUrl, this.httpOptions3).pipe(
      tap(c => console.log(c))
    );
  }
}
