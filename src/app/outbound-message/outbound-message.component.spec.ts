import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutboundMessageComponent } from './outbound-message.component';

describe('OutboundMessageComponent', () => {
  let component: OutboundMessageComponent;
  let fixture: ComponentFixture<OutboundMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutboundMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutboundMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
