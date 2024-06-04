import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { Produto } from '../../models/produto.model';
import { tap } from 'rxjs';
=======
import { Observable, tap } from 'rxjs';
import { Usuario } from '../../models/usuario.model';
import { Produto } from '../../models/produto.model';

>>>>>>> 95bc327bb75818dedc881a508382be73af55523e

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
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
    }),
    responseType: 'blob' as 'json'
  };


  constructor(private httpClient: HttpClient) { }

  baixarImagem(nomeImagem: string): Observable<Blob> {
    const url = `${this.apiUrl}/download/${nomeImagem}`;
    return this.httpClient.get<Blob>(url, this.httpOptions2);
  }

  getUsuarioLogado(): Observable<Usuario> {
    return this.httpClient.get<Usuario>(this.apiUrl, this.httpOptions).pipe(
      tap(usuario => console.log(usuario))
    )
  }

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
