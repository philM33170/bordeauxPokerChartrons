import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CnicComponent } from './cnic.component';

describe('CnicComponent', () => {
  let component: CnicComponent;
  let fixture: ComponentFixture<CnicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CnicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CnicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
