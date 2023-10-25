import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalErreurPasswordComponent } from './modal-erreur-password.component';

describe('ModalErreurPasswordComponent', () => {
  let component: ModalErreurPasswordComponent;
  let fixture: ComponentFixture<ModalErreurPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalErreurPasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalErreurPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
