import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSample1Component } from './form-sample1.component';

describe('FormSample1Component', () => {
  let component: FormSample1Component;
  let fixture: ComponentFixture<FormSample1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSample1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSample1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
