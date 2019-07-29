import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RbtClarifyDeliveryComponent } from './rbt-clarify-delivery.component';

describe('RbtClarifyDeliveryComponent', () => {
  let component: RbtClarifyDeliveryComponent;
  let fixture: ComponentFixture<RbtClarifyDeliveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RbtClarifyDeliveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RbtClarifyDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
