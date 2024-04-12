import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cupom } from '../../models/cupom.model';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CupomService {
  private baseUrl = '/cupom';

  // httpOptions = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJ1bml0aW5zLWp3dCIsInN1YiI6ImthaW8iLCJncm91cHMiOlsiVXNlciIsIkFkbWluIl0sImV4cCI6MTcxMjc4MTc1MCwiaWF0IjoxNzEyNjk1MzUwLCJqdGkiOiJlMTg2MDAwMC02MzE2LTQ2OTQtYjhkYy04MmQ4ZGQyOGUzZjcifQ.QQ_LYon-U45DIiqFuDXtPIKTWD79JWVrxbKyuuwWxZo1uYpXjzcTuW9JN4aj1AlLiw6sf6R8rxRPZ60TZ1IMzyPHAu79vpOhl1k2xux3beHZkxOi56MiaWRwq7Xfl7IMd_9EpOSwX14an2pm_aRDSGmIoudW8H2IyO9-kyBeNy1yxtMXpi9mQJT7d_6wZTd_k5oF9Q3PqOm84AIvzwqueNLFMmbXHxAQ2shEIeg2YCbPWT0Cu6_jXaEn_4ex-Cw1jAkTXkZPZyocMQuqQAOgq1QMVO8-C1k9J_RRCfn1RUueIcT3hnJ6jZ51uWMiFmG6SlrHc3gatiY8a7KC8MAKLg'})
  // };
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJ1bml0aW5zLWp3dCIsInN1YiI6ImthaW8iLCJncm91cHMiOlsiVXNlciIsIkFkbWluIl0sImV4cCI6MTcxMjkzNzgxMSwiaWF0IjoxNzEyODUxNDExLCJqdGkiOiIwNzVlOTFlMS1kYWUxLTRkN2YtYTkxOC02NTgxZGQ3YWIzNWQifQ.UbJKl6PuSJJuJge2mujGpoT10FzopJgEbQwm0bKg7dMSBm1o_9HmhMI4zjey73qRa_lu-5ChqLypwt33sjzwkXO3s1MAG3T9fSVeTjil0EisNlM-j7d9bCjAJaRI2JgbniQE00H-Pyo4UV6XIpiCu2YUo0i55iyDU4pInqYp_HIqavHGQICoehm-n74GLh2psNRblzg6dYI71tUs7CPA7Ydap4cZT3q3N9fC28DJZIPGxszd1os7WrQ5h3fo6uSL72eorubyRwh1qUq2Wn80mmhH9-CRRAUTBrmPLCIx7luq_KVW2hCY7XYrhC3CRINsMhtpIBChZvHA8exLnBegkg'})
  };

  // httpOptions2 = {
  //   headers: new HttpHeaders({'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJ1bml0aW5zLWp3dCIsInN1YiI6ImthaW8iLCJncm91cHMiOlsiVXNlciIsIkFkbWluIl0sImV4cCI6MTcxMjc4MTc1MCwiaWF0IjoxNzEyNjk1MzUwLCJqdGkiOiJlMTg2MDAwMC02MzE2LTQ2OTQtYjhkYy04MmQ4ZGQyOGUzZjcifQ.QQ_LYon-U45DIiqFuDXtPIKTWD79JWVrxbKyuuwWxZo1uYpXjzcTuW9JN4aj1AlLiw6sf6R8rxRPZ60TZ1IMzyPHAu79vpOhl1k2xux3beHZkxOi56MiaWRwq7Xfl7IMd_9EpOSwX14an2pm_aRDSGmIoudW8H2IyO9-kyBeNy1yxtMXpi9mQJT7d_6wZTd_k5oF9Q3PqOm84AIvzwqueNLFMmbXHxAQ2shEIeg2YCbPWT0Cu6_jXaEn_4ex-Cw1jAkTXkZPZyocMQuqQAOgq1QMVO8-C1k9J_RRCfn1RUueIcT3hnJ6jZ51uWMiFmG6SlrHc3gatiY8a7KC8MAKLg'})
  // };
  httpOptions2 = {
    headers: new HttpHeaders({ 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJ1bml0aW5zLWp3dCIsInN1YiI6ImthaW8iLCJncm91cHMiOlsiVXNlciIsIkFkbWluIl0sImV4cCI6MTcxMjkzNzgxMSwiaWF0IjoxNzEyODUxNDExLCJqdGkiOiIwNzVlOTFlMS1kYWUxLTRkN2YtYTkxOC02NTgxZGQ3YWIzNWQifQ.UbJKl6PuSJJuJge2mujGpoT10FzopJgEbQwm0bKg7dMSBm1o_9HmhMI4zjey73qRa_lu-5ChqLypwt33sjzwkXO3s1MAG3T9fSVeTjil0EisNlM-j7d9bCjAJaRI2JgbniQE00H-Pyo4UV6XIpiCu2YUo0i55iyDU4pInqYp_HIqavHGQICoehm-n74GLh2psNRblzg6dYI71tUs7CPA7Ydap4cZT3q3N9fC28DJZIPGxszd1os7WrQ5h3fo6uSL72eorubyRwh1qUq2Wn80mmhH9-CRRAUTBrmPLCIx7luq_KVW2hCY7XYrhC3CRINsMhtpIBChZvHA8exLnBegkg'})
  };


  constructor(private http: HttpClient) { }

  getAll(): Observable<Cupom[]> {
    return this.http.get<Cupom[]>(this.baseUrl, this.httpOptions).pipe(
      tap(cupom => console.log(cupom)));
  }

  insert(Cupom: Cupom): Observable<Cupom> {
    return this.http.post<Cupom>(this.baseUrl, Cupom, this.httpOptions);
  }


  delete(id: number): Observable<any> {
    const url = `${this.baseUrl}/delete/${id}`; 
    return this.http.patch(url, null, this.httpOptions2);
  }

  getById(id: number): Observable<Cupom> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Cupom>(url, this.httpOptions);
  }

  update(id: number, p: Cupom): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.put(url, p, this.httpOptions);
  }
}
