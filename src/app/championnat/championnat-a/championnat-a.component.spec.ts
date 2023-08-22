import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionnatAComponent } from './championnat-a.component';

describe('ChampionnatAComponent', () => {
  let component: ChampionnatAComponent;
  let fixture: ComponentFixture<ChampionnatAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChampionnatAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChampionnatAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
