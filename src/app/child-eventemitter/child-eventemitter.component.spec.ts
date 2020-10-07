import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildEventemitterComponent } from './child-eventemitter.component';

describe('ChildEventemitterComponent', () => {
  let component: ChildEventemitterComponent;
  let fixture: ComponentFixture<ChildEventemitterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildEventemitterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildEventemitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
