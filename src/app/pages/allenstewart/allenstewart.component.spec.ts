import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllenstewartComponent } from './allenstewart.component';

describe('AllenstewartComponent', () => {
  let component: AllenstewartComponent;
  let fixture: ComponentFixture<AllenstewartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllenstewartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllenstewartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
