import { TestBed } from '@angular/core/testing';

import { Qualif2024Service } from './qualif2024.service';

describe('Qualif2024Service', () => {
  let service: Qualif2024Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Qualif2024Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
