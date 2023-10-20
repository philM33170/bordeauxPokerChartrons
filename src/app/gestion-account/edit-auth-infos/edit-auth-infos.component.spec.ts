import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAuthInfosComponent } from './edit-auth-infos.component';

describe('EditAuthInfosComponent', () => {
  let component: EditAuthInfosComponent;
  let fixture: ComponentFixture<EditAuthInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAuthInfosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAuthInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
