import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalErreurEmailComponent } from './modal-erreur-email.component';

describe('ModalErreurEmailComponent', () => {
  let component: ModalErreurEmailComponent;
  let fixture: ComponentFixture<ModalErreurEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalErreurEmailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalErreurEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
