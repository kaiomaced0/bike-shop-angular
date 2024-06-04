import { TestBed } from '@angular/core/testing';

import { UsuariologadoService } from './usuariologado.service';

describe('UsuariologadoService', () => {
  let service: UsuariologadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuariologadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
