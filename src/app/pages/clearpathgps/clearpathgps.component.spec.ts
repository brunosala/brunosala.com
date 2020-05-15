import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearpathgpsComponent } from './clearpathgps.component';

describe('ClearpathgpsComponent', () => {
  let component: ClearpathgpsComponent;
  let fixture: ComponentFixture<ClearpathgpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClearpathgpsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClearpathgpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
