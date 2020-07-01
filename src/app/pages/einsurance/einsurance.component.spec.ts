import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EinsuranceComponent } from './einsurance.component';

describe('EinsuranceComponent', () => {
  let component: EinsuranceComponent;
  let fixture: ComponentFixture<EinsuranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EinsuranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EinsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
