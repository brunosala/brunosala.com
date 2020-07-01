import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BitbloqComponent } from './bitbloq.component';

describe('BitbloqComponent', () => {
  let component: BitbloqComponent;
  let fixture: ComponentFixture<BitbloqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BitbloqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BitbloqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
