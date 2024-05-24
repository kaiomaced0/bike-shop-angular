import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Carrossel } from '../../models/carrossel.model';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private apiUrl = '/home';

  private token  = localStorage.getItem('token');

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.token})
  };
  httpOptions2 = {
    headers: new HttpHeaders({'Authorization': 'Bearer ' + this.token})
  };


  constructor(private httpClient: HttpClient) { }

  carrossel(){
    return this.httpClient.get<Carrossel[]>(this.apiUrl+'/carrossel', this.httpOptions).pipe(
      tap(carrossel => console.log(carrossel))
    );
  }
}