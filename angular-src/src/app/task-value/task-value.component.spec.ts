import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskValueComponent } from './task-value.component';

describe('TaskValueComponent', () => {
  let component: TaskValueComponent;
  let fixture: ComponentFixture<TaskValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
