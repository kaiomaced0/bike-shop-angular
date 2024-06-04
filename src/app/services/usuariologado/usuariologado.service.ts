import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../../models/produto.model';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariologadoService {

  private apiUrl = '/usuariologado';

  private token  = localStorage.getItem('token');

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.token})
  };
  httpOptions2 = {
    headers: new HttpHeaders({'Authorization': 'Bearer ' + this.token})
  };


  constructor(private httpClient: HttpClient) { }


  listgostei(){
    return this.httpClient.get<Produto[]>(this.apiUrl+'/gostei', this.httpOptions).pipe(
      tap(produtos => console.log(produtos))
    );
  }

  insertGostei(id: number){
    const url = `${this.apiUrl}/gostei/insert/${id}`;
    return this.httpClient.patch(url, null, this.httpOptions);
  }

  deleteGostei(id: number){
    const url = `${this.apiUrl}/gostei/delete/${id}`;
    return this.httpClient.patch(url, null, this.httpOptions);
  }

}
