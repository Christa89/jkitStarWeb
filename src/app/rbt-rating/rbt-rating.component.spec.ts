import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RbtRatingComponent } from './rbt-rating.component';

describe('RbtRatingComponent', () => {
  let component: RbtRatingComponent;
  let fixture: ComponentFixture<RbtRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RbtRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RbtRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
