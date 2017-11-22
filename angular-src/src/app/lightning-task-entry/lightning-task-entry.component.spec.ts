import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightningTaskEntryComponent } from './lightning-task-entry.component';

describe('LightningTaskEntryComponent', () => {
  let component: LightningTaskEntryComponent;
  let fixture: ComponentFixture<LightningTaskEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightningTaskEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightningTaskEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
