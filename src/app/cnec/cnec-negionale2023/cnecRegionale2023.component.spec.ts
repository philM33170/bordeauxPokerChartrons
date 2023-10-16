import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CnecRegionale2023Component } from './cnecRegionale2023.component';

describe('CnecRegionale2023Component', () => {
  let component: CnecRegionale2023Component;
  let fixture: ComponentFixture<CnecRegionale2023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CnecRegionale2023Component],
    }).compileComponents();

    fixture = TestBed.createComponent(CnecRegionale2023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
