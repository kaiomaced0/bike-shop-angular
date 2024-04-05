import { TestBed } from '@angular/core/testing';

import { FreioService } from './freio.service';

describe('FreioService', () => {
  let service: FreioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FreioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
