import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditPasswordComponent } from './modal-edit-password.component';

describe('ModalEditPasswordComponent', () => {
  let component: ModalEditPasswordComponent;
  let fixture: ComponentFixture<ModalEditPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditPasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEditPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
