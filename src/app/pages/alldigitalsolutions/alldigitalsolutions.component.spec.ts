import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlldigitalsolutionsComponent } from './alldigitalsolutions.component';

describe('AlldigitalsolutionsComponent', () => {
  let component: AlldigitalsolutionsComponent;
  let fixture: ComponentFixture<AlldigitalsolutionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlldigitalsolutionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlldigitalsolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
