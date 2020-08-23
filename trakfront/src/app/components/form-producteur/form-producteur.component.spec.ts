import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProducteurComponent } from './form-producteur.component';

describe('FormProducteurComponent', () => {
  let component: FormProducteurComponent;
  let fixture: ComponentFixture<FormProducteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormProducteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormProducteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
