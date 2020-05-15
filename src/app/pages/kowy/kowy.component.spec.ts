import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KowyComponent } from './kowy.component';

describe('KowyComponent', () => {
  let component: KowyComponent;
  let fixture: ComponentFixture<KowyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KowyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KowyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
