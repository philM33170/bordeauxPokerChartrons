import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CnecNationale2023Component } from './cnecNationale2023.component';

describe('CnecNationale2023Component', () => {
  let component: CnecNationale2023Component;
  let fixture: ComponentFixture<CnecNationale2023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CnecNationale2023Component],
    }).compileComponents();

    fixture = TestBed.createComponent(CnecNationale2023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
