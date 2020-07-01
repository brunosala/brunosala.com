import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigthinkeryComponent } from './bigthinkery.component';

describe('BigthinkeryComponent', () => {
  let component: BigthinkeryComponent;
  let fixture: ComponentFixture<BigthinkeryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigthinkeryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigthinkeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
