import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesencheresComponent } from './mesencheres.component';

describe('MesencheresComponent', () => {
  let component: MesencheresComponent;
  let fixture: ComponentFixture<MesencheresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesencheresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesencheresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
