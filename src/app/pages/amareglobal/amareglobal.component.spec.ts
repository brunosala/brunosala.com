import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmareglobalComponent } from './amareglobal.component';

describe('AmareglobalComponent', () => {
  let component: AmareglobalComponent;
  let fixture: ComponentFixture<AmareglobalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmareglobalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmareglobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
