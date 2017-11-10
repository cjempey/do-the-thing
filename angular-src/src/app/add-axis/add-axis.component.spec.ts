import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAxisComponent } from './add-axis.component';

describe('AddAxisComponent', () => {
  let component: AddAxisComponent;
  let fixture: ComponentFixture<AddAxisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAxisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAxisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
