import { TestBed } from '@angular/core/testing';

import { FerramentaService } from './ferramenta.service';

describe('FerramentaService', () => {
  let service: FerramentaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FerramentaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
