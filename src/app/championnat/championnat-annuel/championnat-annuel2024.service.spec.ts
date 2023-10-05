import { TestBed } from '@angular/core/testing';

import { ChampionnatAnnuel2024Service } from './championnat-annuel2024.service';

describe('ChampionnatAnnuel2024Service', () => {
  let service: ChampionnatAnnuel2024Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChampionnatAnnuel2024Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
