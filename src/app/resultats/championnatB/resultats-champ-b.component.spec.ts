import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultatsChampBComponent } from './resultats-champ-b.component';

describe('ResultatsChampBComponent', () => {
  let component: ResultatsChampBComponent;
  let fixture: ComponentFixture<ResultatsChampBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResultatsChampBComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ResultatsChampBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
