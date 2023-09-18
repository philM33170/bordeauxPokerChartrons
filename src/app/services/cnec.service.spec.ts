import { TestBed } from '@angular/core/testing';

import { CnecService } from './cnec.service';

describe('CnecService', () => {
  let service: CnecService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CnecService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
