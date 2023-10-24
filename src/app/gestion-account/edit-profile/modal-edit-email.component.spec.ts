import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditEmailComponent } from './modal-edit-email.component';

describe('ModalEditEmailComponent', () => {
  let component: ModalEditEmailComponent;
  let fixture: ComponentFixture<ModalEditEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditEmailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEditEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
