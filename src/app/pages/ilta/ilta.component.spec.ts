import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IltaComponent } from './ilta.component';

describe('IltaComponent', () => {
  let component: IltaComponent;
  let fixture: ComponentFixture<IltaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IltaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
