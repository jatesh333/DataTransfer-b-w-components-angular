import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component1LocalstorageComponent } from './component1-localstorage.component';

describe('Component1LocalstorageComponent', () => {
  let component: Component1LocalstorageComponent;
  let fixture: ComponentFixture<Component1LocalstorageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component1LocalstorageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component1LocalstorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
