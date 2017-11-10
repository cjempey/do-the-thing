import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAxesComponent } from './view-axes.component';

describe('ViewAxesComponent', () => {
  let component: ViewAxesComponent;
  let fixture: ComponentFixture<ViewAxesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAxesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
