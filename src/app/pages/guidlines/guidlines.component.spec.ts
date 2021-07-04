import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidlinesComponent } from './guidlines.component';

describe('GuidlinesComponent', () => {
  let component: GuidlinesComponent;
  let fixture: ComponentFixture<GuidlinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuidlinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuidlinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
