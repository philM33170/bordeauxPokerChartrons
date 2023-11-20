import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Qualif2024Component } from './qualif2024.component';

describe('Qualif2024Component', () => {
  let component: Qualif2024Component;
  let fixture: ComponentFixture<Qualif2024Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Qualif2024Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Qualif2024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
