import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionnatCComponent } from './championnat-c.component';

describe('ChampionnatCComponent', () => {
  let component: ChampionnatCComponent;
  let fixture: ComponentFixture<ChampionnatCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChampionnatCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChampionnatCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
