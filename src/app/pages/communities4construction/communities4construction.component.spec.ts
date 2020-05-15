import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Communities4constructionComponent } from './communities4construction.component';

describe('Communities4constructionComponent', () => {
  let component: Communities4constructionComponent;
  let fixture: ComponentFixture<Communities4constructionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Communities4constructionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Communities4constructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
