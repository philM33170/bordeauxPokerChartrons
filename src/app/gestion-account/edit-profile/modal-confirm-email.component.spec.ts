import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalConfirmEmailComponent } from './modal-confirm-email.component';

describe('ModalConfirmEmailComponent', () => {
  let component: ModalConfirmEmailComponent;
  let fixture: ComponentFixture<ModalConfirmEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalConfirmEmailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalConfirmEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
