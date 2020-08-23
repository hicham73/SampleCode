import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySmallMapComponent } from './map.component';

describe('MySmallMapComponent', () => {
  let component: MySmallMapComponent;
  let fixture: ComponentFixture<MySmallMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySmallMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySmallMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
