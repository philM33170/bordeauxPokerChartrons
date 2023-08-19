import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CnecComponent } from './cnec.component';

describe('CnecComponent', () => {
  let component: CnecComponent;
  let fixture: ComponentFixture<CnecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CnecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CnecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
