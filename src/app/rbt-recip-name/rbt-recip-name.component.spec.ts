import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RbtRecipNameComponent } from './rbt-recip-name.component';

describe('RbtRecipNameComponent', () => {
  let component: RbtRecipNameComponent;
  let fixture: ComponentFixture<RbtRecipNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RbtRecipNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RbtRecipNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
