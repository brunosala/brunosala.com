import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElevatedcampaignsComponent } from './elevatedcampaigns.component';

describe('ElevatedcampaignsComponent', () => {
  let component: ElevatedcampaignsComponent;
  let fixture: ComponentFixture<ElevatedcampaignsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElevatedcampaignsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElevatedcampaignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
