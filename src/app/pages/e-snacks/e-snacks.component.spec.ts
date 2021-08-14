import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ESnacksComponent } from './e-snacks.component';

describe('ESnacksComponent', () => {
  let component: ESnacksComponent;
  let fixture: ComponentFixture<ESnacksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ESnacksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ESnacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
