import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultatsChampAComponent } from './resultats-champ-a.component';

describe('ResultatsChampAComponent', () => {
  let component: ResultatsChampAComponent;
  let fixture: ComponentFixture<ResultatsChampAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResultatsChampAComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ResultatsChampAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
