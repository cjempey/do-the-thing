import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AxisCardComponent } from './axis-card.component';

describe('AxisCardComponent', () => {
  let component: AxisCardComponent;
  let fixture: ComponentFixture<AxisCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AxisCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AxisCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
