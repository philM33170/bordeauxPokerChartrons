import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionnatBComponent } from './championnat-b.component';

describe('ChampionnatBComponent', () => {
  let component: ChampionnatBComponent;
  let fixture: ComponentFixture<ChampionnatBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChampionnatBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChampionnatBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
