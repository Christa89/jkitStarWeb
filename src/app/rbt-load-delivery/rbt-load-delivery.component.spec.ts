import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RbtLoadDeliveryComponent } from './rbt-load-delivery.component';

describe('RbtLoadDeliveryComponent', () => {
  let component: RbtLoadDeliveryComponent;
  let fixture: ComponentFixture<RbtLoadDeliveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RbtLoadDeliveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RbtLoadDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
