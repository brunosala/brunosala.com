import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JayscustomcreationsComponent } from './jayscustomcreations.component';

describe('JayscustomcreationsComponent', () => {
  let component: JayscustomcreationsComponent;
  let fixture: ComponentFixture<JayscustomcreationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JayscustomcreationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JayscustomcreationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
