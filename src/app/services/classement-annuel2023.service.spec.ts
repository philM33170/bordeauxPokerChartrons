import { TestBed } from '@angular/core/testing';

import { ClassementAnnuel2023Service } from './classement-annuel2023.service';

describe('ClassementAnnuel2023Service', () => {
  let service: ClassementAnnuel2023Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassementAnnuel2023Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
