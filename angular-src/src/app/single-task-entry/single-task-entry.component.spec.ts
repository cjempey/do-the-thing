import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleTaskEntryComponent } from './single-task-entry.component';

describe('SingleTaskEntryComponent', () => {
  let component: SingleTaskEntryComponent;
  let fixture: ComponentFixture<SingleTaskEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleTaskEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleTaskEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
