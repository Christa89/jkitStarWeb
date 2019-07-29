import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RbtThankyouComponent } from './rbt-thankyou.component';

describe('RbtThankyouComponent', () => {
  let component: RbtThankyouComponent;
  let fixture: ComponentFixture<RbtThankyouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RbtThankyouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RbtThankyouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
