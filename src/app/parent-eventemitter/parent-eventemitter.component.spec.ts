import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentEventemitterComponent } from './parent-eventemitter.component';

describe('ParentEventemitterComponent', () => {
  let component: ParentEventemitterComponent;
  let fixture: ComponentFixture<ParentEventemitterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentEventemitterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentEventemitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
