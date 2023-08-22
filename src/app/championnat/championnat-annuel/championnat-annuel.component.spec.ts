import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionnatAnnuelComponent } from './championnat-annuel.component';

describe('ChampionnatAnnuelComponent', () => {
  let component: ChampionnatAnnuelComponent;
  let fixture: ComponentFixture<ChampionnatAnnuelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChampionnatAnnuelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChampionnatAnnuelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
