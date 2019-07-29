import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RbtPassCodeComponent } from './rbt-pass-code.component';

describe('RbtPassCodeComponent', () => {
  let component: RbtPassCodeComponent;
  let fixture: ComponentFixture<RbtPassCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RbtPassCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RbtPassCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
