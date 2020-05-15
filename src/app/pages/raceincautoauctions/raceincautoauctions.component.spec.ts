import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceincautoauctionsComponent } from './raceincautoauctions.component';

describe('RaceincautoauctionsComponent', () => {
  let component: RaceincautoauctionsComponent;
  let fixture: ComponentFixture<RaceincautoauctionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaceincautoauctionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceincautoauctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
