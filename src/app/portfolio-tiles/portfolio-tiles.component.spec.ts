import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PortfolioTilesComponent } from './portfolio-tiles.component';

describe('PortfolioTilesComponent', () => {
  let component: PortfolioTilesComponent;
  let fixture: ComponentFixture<PortfolioTilesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioTilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
