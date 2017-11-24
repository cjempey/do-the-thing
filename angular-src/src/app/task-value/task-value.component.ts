import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { TaskValue } from '../models/Task';
import { Axis } from '../models/Axis';

@Component({
  selector: 'app-task-value',
  templateUrl: './task-value.component.html',
  styleUrls: ['./task-value.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TaskValueComponent implements OnInit {
  axis: Axis;
  value: Number = 0;

  ratings = [1, 2, 3, 4, 5];
  rating: Number = 0;

  @Input() availableAxes: Axis[] = [];
  @Output() valueUpdate: EventEmitter<TaskValue> = new EventEmitter<TaskValue>();

  constructor() {
    console.log('task-value constructor');
  }

  ngOnInit() {
    console.log('task-value onInit');
  }



  public starIcon(index): string {
    if (index <= this.rating) {
       return 'star';
    } else if (this.rating === index + 0.5) {
      return 'star_half';
    } else {
      return 'star_border';
    }
  }

  public setRating(rate: Number) {
    this.rating = rate;
  }

  public setValue(rate: Number) {
    this.value = rate;
    this.publish();
  }

  private publish() {
    const taskVal: TaskValue = {
      axis: this.axis,
      axisId: this.axis._id,
      value: this.value
    };

    console.log (`task-value publishing ${JSON.stringify(taskVal)}`)
    this.valueUpdate.emit(taskVal);
  }
}
