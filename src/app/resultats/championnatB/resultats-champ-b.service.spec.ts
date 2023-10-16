import { TestBed } from '@angular/core/testing';

import { ResultatsChampBService } from './resultats-champ-b.service';

describe('ResultatsChampBService', () => {
  let service: ResultatsChampBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResultatsChampBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
