import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WestpalmwebdevelopmentComponent } from './westpalmwebdevelopment.component';

describe('WestpalmwebdevelopmentComponent', () => {
  let component: WestpalmwebdevelopmentComponent;
  let fixture: ComponentFixture<WestpalmwebdevelopmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WestpalmwebdevelopmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WestpalmwebdevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
