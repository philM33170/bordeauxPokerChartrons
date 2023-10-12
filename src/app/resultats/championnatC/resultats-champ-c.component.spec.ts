import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultatsChampCComponent } from './resultats-champ-c.component';

describe('ResultatsChampCComponent', () => {
  let component: ResultatsChampCComponent;
  let fixture: ComponentFixture<ResultatsChampCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResultatsChampCComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ResultatsChampCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
