import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RbtHomeComponent } from './rbt-home.component';

describe('RbtHomeComponent', () => {
  let component: RbtHomeComponent;
  let fixture: ComponentFixture<RbtHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RbtHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RbtHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
