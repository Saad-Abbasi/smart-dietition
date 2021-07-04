import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortionControllComponent } from './portion-controll.component';

describe('PortionControllComponent', () => {
  let component: PortionControllComponent;
  let fixture: ComponentFixture<PortionControllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortionControllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortionControllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
