import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RbtContnNoComponent } from './rbt-contn-no.component';

describe('RbtContnNoComponent', () => {
  let component: RbtContnNoComponent;
  let fixture: ComponentFixture<RbtContnNoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RbtContnNoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RbtContnNoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
