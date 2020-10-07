import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component2ActivatedrouteComponent } from './component2-activatedroute.component';

describe('Component2ActivatedrouteComponent', () => {
  let component: Component2ActivatedrouteComponent;
  let fixture: ComponentFixture<Component2ActivatedrouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component2ActivatedrouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component2ActivatedrouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
