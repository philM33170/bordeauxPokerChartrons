import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalConfirmProfileComponent } from './modal-confirm-profile.component';

describe('ModalConfirmProfileComponent', () => {
  let component: ModalConfirmProfileComponent;
  let fixture: ComponentFixture<ModalConfirmProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalConfirmProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalConfirmProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
