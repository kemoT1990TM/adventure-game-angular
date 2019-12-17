import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GateAlertComponent } from './gate-alert.component';

describe('GateAlertComponent', () => {
  let component: GateAlertComponent;
  let fixture: ComponentFixture<GateAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GateAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GateAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
