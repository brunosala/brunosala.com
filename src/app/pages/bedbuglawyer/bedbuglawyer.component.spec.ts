import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BedbuglawyerComponent } from './bedbuglawyer.component';

describe('BedbuglawyerComponent', () => {
  let component: BedbuglawyerComponent;
  let fixture: ComponentFixture<BedbuglawyerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BedbuglawyerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BedbuglawyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
