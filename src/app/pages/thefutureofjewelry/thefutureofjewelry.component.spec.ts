import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThefutureofjewelryComponent } from './thefutureofjewelry.component';

describe('ThefutureofjewelryComponent', () => {
  let component: ThefutureofjewelryComponent;
  let fixture: ComponentFixture<ThefutureofjewelryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThefutureofjewelryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThefutureofjewelryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
