import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KioxiaComponent } from './kioxia.component';

describe('KioxiaComponent', () => {
  let component: KioxiaComponent;
  let fixture: ComponentFixture<KioxiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KioxiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KioxiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
