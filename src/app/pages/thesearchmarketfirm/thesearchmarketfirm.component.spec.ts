import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThesearchmarketfirmComponent } from './thesearchmarketfirm.component';

describe('ThesearchmarketfirmComponent', () => {
  let component: ThesearchmarketfirmComponent;
  let fixture: ComponentFixture<ThesearchmarketfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThesearchmarketfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThesearchmarketfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
