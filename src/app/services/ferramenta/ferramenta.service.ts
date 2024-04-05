import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ferramenta } from '../../models/ferramenta.model';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FerramentaService {

  private baseUrl = '/ferramenta';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJ1bml0aW5zLWp3dCIsInN1YiI6ImthaW8iLCJncm91cHMiOlsiVXNlciIsIkFkbWluIl0sImV4cCI6MTcxMjM0NDcyMSwiaWF0IjoxNzEyMjU4MzIxLCJqdGkiOiI3MmVkZGQyYi0zNzI4LTRkMTItYWJjMS1hYzYzOThjODQzZDUifQ.iuzkjO-ny2AE1wzDKEdfgQvwkNgJy3822l3_jqFmEonKzfXdhKWjUedsSEtt1OeRsZK2YWXcP84187BEv2PZBXiHh29Jau8IDh995uaLWSkmO2gaPxeFy_9F2pss3CHKihdhTcic2bGAjXRxyJYSLblVPcO8ua3p4CjS2UHpXloo5ztRycapHmmykmXds8goIs8FdPfSWaqaLsaL6-TpAnr9iOtvIEYKYggRZz1d_yfaSc9MNzEqeozcu4wZYuqETlT1GgHV7nJuUpwTTGL6pmYXjxof32U6B82TzgFqy0p6bSkLadaiW8YQ3yG9ZHZVeB2Fh3uTupT4bpy5hmtHNA'})
  };


  constructor(private http: HttpClient) { }

  getAll(): Observable<Ferramenta[]> {
    return this.http.get<Ferramenta[]>(this.baseUrl+'/admin', this.httpOptions).pipe(
      tap(ferramentas => console.log(ferramentas)));
  }

  insert(Ferramenta: Ferramenta): Observable<Ferramenta> {
    return this.http.post<Ferramenta>(this.baseUrl, Ferramenta);
  }

  update(id: number, Ferramenta: Ferramenta): Observable<Ferramenta> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.put<Ferramenta>(url, Ferramenta);
  }

  delete(id: number): Observable<void> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
