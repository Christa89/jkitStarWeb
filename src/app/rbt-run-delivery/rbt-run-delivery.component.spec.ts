import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RbtRunDeliveryComponent } from './rbt-run-delivery.component';

describe('RbtRunDeliveryComponent', () => {
  let component: RbtRunDeliveryComponent;
  let fixture: ComponentFixture<RbtRunDeliveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RbtRunDeliveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RbtRunDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
