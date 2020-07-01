import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidosmarketingComponent } from './unidosmarketing.component';

describe('UnidosmarketingComponent', () => {
  let component: UnidosmarketingComponent;
  let fixture: ComponentFixture<UnidosmarketingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnidosmarketingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnidosmarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
