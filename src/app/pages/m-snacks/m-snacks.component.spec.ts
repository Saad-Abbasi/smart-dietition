import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MSnacksComponent } from './m-snacks.component';

describe('MSnacksComponent', () => {
  let component: MSnacksComponent;
  let fixture: ComponentFixture<MSnacksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MSnacksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MSnacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
