import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberAsStarsComponent } from './number-as-stars.component';

describe('NumberAsStarsComponent', () => {
  let component: NumberAsStarsComponent;
  let fixture: ComponentFixture<NumberAsStarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberAsStarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberAsStarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
