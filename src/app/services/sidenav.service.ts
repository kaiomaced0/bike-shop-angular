import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  private sidenavToggleSubject = new Subject<void>();

  // Método para acionar a mudança de estado
  toggle() {
    this.sidenavToggleSubject.next();
  }

  // Getter para o Observable
  get sidenavToggle$() {
    return this.sidenavToggleSubject.asObservable();
  }
}
