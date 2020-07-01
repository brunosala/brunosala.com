import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MykaarmaComponent } from './mykaarma.component';

describe('MykaarmaComponent', () => {
  let component: MykaarmaComponent;
  let fixture: ComponentFixture<MykaarmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MykaarmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MykaarmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
