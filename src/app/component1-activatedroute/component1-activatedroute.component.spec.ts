import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component1ActivatedrouteComponent } from './component1-activatedroute.component';

describe('Component1ActivatedrouteComponent', () => {
  let component: Component1ActivatedrouteComponent;
  let fixture: ComponentFixture<Component1ActivatedrouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component1ActivatedrouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component1ActivatedrouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
