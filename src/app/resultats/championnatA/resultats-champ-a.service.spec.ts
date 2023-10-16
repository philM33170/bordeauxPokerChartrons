import { TestBed } from '@angular/core/testing';

import { ResultatsChampAService } from './resultats-champ-a.service';

describe('ResultatsChampAService', () => {
  let service: ResultatsChampAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResultatsChampAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
