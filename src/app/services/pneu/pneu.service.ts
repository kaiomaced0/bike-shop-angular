import { Injectable } from '@angular/core';
import { Pneu } from '../../models/pneu.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { PneuDTO } from '../../dto/pneu.dto';

@Injectable({
  providedIn: 'root'
})
export class PneuService {

  private baseUrl = '/pneu';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJ1bml0aW5zLWp3dCIsInN1YiI6ImthaW8iLCJncm91cHMiOlsiVXNlciIsIkFkbWluIl0sImV4cCI6MTcxMjM0NDcyMSwiaWF0IjoxNzEyMjU4MzIxLCJqdGkiOiI3MmVkZGQyYi0zNzI4LTRkMTItYWJjMS1hYzYzOThjODQzZDUifQ.iuzkjO-ny2AE1wzDKEdfgQvwkNgJy3822l3_jqFmEonKzfXdhKWjUedsSEtt1OeRsZK2YWXcP84187BEv2PZBXiHh29Jau8IDh995uaLWSkmO2gaPxeFy_9F2pss3CHKihdhTcic2bGAjXRxyJYSLblVPcO8ua3p4CjS2UHpXloo5ztRycapHmmykmXds8goIs8FdPfSWaqaLsaL6-TpAnr9iOtvIEYKYggRZz1d_yfaSc9MNzEqeozcu4wZYuqETlT1GgHV7nJuUpwTTGL6pmYXjxof32U6B82TzgFqy0p6bSkLadaiW8YQ3yG9ZHZVeB2Fh3uTupT4bpy5hmtHNA'})
  };


  constructor(private http: HttpClient) { }

  getAll(): Observable<Pneu[]> {
    return this.http.get<Pneu[]>(this.baseUrl+'/admin', this.httpOptions).pipe(
      tap(pneu => console.log(pneu)));
  }

  insert(p: PneuDTO): Observable<PneuDTO> {
    return this.http.post<PneuDTO>(this.baseUrl, p, this.httpOptions);
  }

  update(id: number, Pneu: Pneu): Observable<Pneu> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.put<Pneu>(url, Pneu);
  }

  delete(id: number): Observable<void> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
