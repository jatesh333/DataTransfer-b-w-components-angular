import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component2LocalstorageComponent } from './component2-localstorage.component';

describe('Component2LocalstorageComponent', () => {
  let component: Component2LocalstorageComponent;
  let fixture: ComponentFixture<Component2LocalstorageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component2LocalstorageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component2LocalstorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
