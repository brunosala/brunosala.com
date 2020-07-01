import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyownspadeComponent } from './myownspade.component';

describe('MyownspadeComponent', () => {
  let component: MyownspadeComponent;
  let fixture: ComponentFixture<MyownspadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyownspadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyownspadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
