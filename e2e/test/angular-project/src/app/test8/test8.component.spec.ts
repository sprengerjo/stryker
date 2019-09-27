import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Test8Component } from './test8.component';

describe('Test8Component', () => {
  let component: Test8Component;
  let fixture: ComponentFixture<Test8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Test8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Test8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
