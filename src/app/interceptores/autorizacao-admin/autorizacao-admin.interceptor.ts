import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';

@Injectable()
export class AutorizacaoAdminInterceptor implements HttpInterceptor {

  constructor(private router: Router, private snackBar: MatSnackBar, private authService: AuthService) {}


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Se não houver token, apenas passa a solicitação sem modificação
    return next.handle(request);
  }

}
