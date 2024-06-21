import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Usuario } from '../../models/usuario.model';
import { Produto } from '../../models/produto.model';
import { Endereco } from '../../models/endereco.models';
import { UpdateDados } from '../../models/updatedados.model';
import { Telefone } from '../../models/telefone.models';
import { Compra } from '../../models/compra.model';
import { Cartao } from '../../models/cartao.model';


@Injectable({
  providedIn: 'root'
})
export class UsuariologadoService {

  // private apiUrl = 'http://localhost:8080/usuariologado';
  private apiUrl = 'http://34.151.236.42:8080/usuariologado';

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
  getCompras(page:number, pageSize:number): Observable<Compra[]> {
    return this.httpClient.get<Compra[]>(`${this.apiUrl}/compras/${page}/${pageSize}`, this.httpOptions).pipe(
      tap(compra => console.log(compra))
    )
  }
  getCompraId(id:string): Observable<Compra> {
    const url = `${this.apiUrl}/compra/${id}`;
    return this.httpClient.get<Compra>(url, this.httpOptions).pipe(
      tap(compra => console.log(compra)));
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

  removeGostei(id: number){
    const url = `${this.apiUrl}/gostei/delete/${id}`;
    return this.httpClient.patch(url, null, this.httpOptions);
  }


  dadosupdate(usuario: UpdateDados){
    const url = `${this.apiUrl}/updatedados`;
    return this.httpClient.put(url, {
      "pessoa": {
        "cpf": usuario.pessoa?.cpf,
        "nome": usuario.pessoa?.nome,
        "login": usuario.pessoa?.login,
        "senha": usuario.pessoa?.senha,
        "email": usuario.pessoa?.email,
        "dataNascimento": usuario.pessoa?.dataNascimento
      },
      "senhaAtual": usuario.senhaAtual
    }, this.httpOptions);
  }

  deleteGostei(id: number){
    const url = `${this.apiUrl}/gostei/delete/${id}`;
    return this.httpClient.patch(url, null, this.httpOptions);
  }

  getEnderecos(page:number, pageSize:number): Observable<Endereco[]> {
    return this.httpClient.get<Endereco[]>(`${this.apiUrl}/enderecos/${page}/${pageSize}`, this.httpOptions);
  }

  getEnderecosLista(): Observable<Endereco[]> {
    return this.httpClient.get<Endereco[]>(`${this.apiUrl}/enderecos`, this.httpOptions);
  }

  getCartoes(page:number, pageSize:number): Observable<Cartao[]> {
    return this.httpClient.get<Cartao[]>(`${this.apiUrl}/cartoes/${page}/${pageSize}`, this.httpOptions);
  }

  getCartoesLista(): Observable<Cartao[]> {
    return this.httpClient.get<Cartao[]>(`${this.apiUrl}/cartoes`, this.httpOptions);
  }

  insertTelefone(telefone: Telefone){
    return this.httpClient.post<Telefone>(`${this.apiUrl}/addtelefone`, telefone, this.httpOptions);
  }
  getTelefones(page:number, pageSize:number): Observable<Telefone[]> {
    return this.httpClient.get<Telefone[]>(`${this.apiUrl}/telefones/${page}/${pageSize}`, this.httpOptions);
  }
  countTelefones(): Observable<number> {
    return this.httpClient.get<number>(`${this.apiUrl}/count/telefones`,this.httpOptions);
  }
  countEnderecos(): Observable<number> {
    return this.httpClient.get<number>(`${this.apiUrl}/count/enderecos`,this.httpOptions);
  }
  countCompras(): Observable<number> {
    return this.httpClient.get<number>(`${this.apiUrl}/count/compras`,this.httpOptions);
  }
  deleteTelefone(id: number){
    const url = `${this.apiUrl}/telefone/delete/${id}`;
    return this.httpClient.put(url, null, this.httpOptions);
  }


}
