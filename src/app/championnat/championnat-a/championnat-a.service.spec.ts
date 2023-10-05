import { TestBed } from '@angular/core/testing';

import { ChampionnatAService } from './championnat-a.service';

describe('ChampionnatAService', () => {
  let service: ChampionnatAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChampionnatAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
