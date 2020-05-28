import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChristiesheldonComponent } from './christiesheldon.component';

describe('ChristiesheldonComponent', () => {
  let component: ChristiesheldonComponent;
  let fixture: ComponentFixture<ChristiesheldonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChristiesheldonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChristiesheldonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
