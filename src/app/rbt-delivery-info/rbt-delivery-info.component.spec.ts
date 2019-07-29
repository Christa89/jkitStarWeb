import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RbtDeliveryInfoComponent } from './rbt-delivery-info.component';

describe('RbtDeliveryInfoComponent', () => {
  let component: RbtDeliveryInfoComponent;
  let fixture: ComponentFixture<RbtDeliveryInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RbtDeliveryInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RbtDeliveryInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
