import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CathyglassonComponent } from './cathyglasson.component';

describe('CathyglassonComponent', () => {
  let component: CathyglassonComponent;
  let fixture: ComponentFixture<CathyglassonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CathyglassonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CathyglassonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
