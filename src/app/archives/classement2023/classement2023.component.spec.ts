import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Classement2023Component } from './classement2023.component';

describe('Classement2023Component', () => {
  let component: Classement2023Component;
  let fixture: ComponentFixture<Classement2023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Classement2023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Classement2023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
