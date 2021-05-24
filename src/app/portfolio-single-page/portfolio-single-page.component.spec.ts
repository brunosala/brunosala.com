import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PortfolioSinglePageComponent } from './portfolio-single-page.component';

describe('PortfolioSinglePageComponent', () => {
  let component: PortfolioSinglePageComponent;
  let fixture: ComponentFixture<PortfolioSinglePageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioSinglePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioSinglePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
