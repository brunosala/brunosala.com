import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquitiComponent } from './equiti.component';

describe('EquitiComponent', () => {
  let component: EquitiComponent;
  let fixture: ComponentFixture<EquitiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquitiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquitiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
