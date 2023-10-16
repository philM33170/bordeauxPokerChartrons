import { TestBed } from '@angular/core/testing';

import { ResultatsChampCService } from './resultats-champ-c.service';

describe('ResultatsChampCService', () => {
  let service: ResultatsChampCService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResultatsChampCService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
