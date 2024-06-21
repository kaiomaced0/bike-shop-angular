import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Carrossel } from '../../models/carrossel.model';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private apiUrl = 'http://localhost:8080/home';
  // private apiUrl = 'http://34.151.236.42:8080/home';

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

  carrossel(){
    return this.httpClient.get<Carrossel[]>(this.apiUrl+'/carrossel', this.httpOptions3).pipe(
      tap(carrossel => console.log(carrossel))
    );
  }
}
