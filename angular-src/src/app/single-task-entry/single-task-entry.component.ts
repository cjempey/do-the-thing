import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Task, TaskValue } from '../models/Task';
import { Axis } from '../models/Axis';
import { AxisService } from '../services/axis.service';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-single-task-entry',
  templateUrl: './single-task-entry.component.html',
  styleUrls: ['./single-task-entry.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SingleTaskEntryComponent implements OnInit {

  task: Task;

  availableAxes: Axis[] = [];

  constructor(private axisServ: AxisService, private taskServ: TaskService) {
  }

  ngOnInit() {
    this.resetTask();

    this.axisServ.getAllAxes().subscribe( axes => this.availableAxes = axes );
  }

  private resetTask() {
    this.task = {
      name: '',
      description: '',
      status: 'Not Started',
      values: []
    };
  }

  public addValue() {
    this.task.values.push({
      axis: null,
      axisId: null,
      value: 0
    });
  }

  public updateValue(value: TaskValue) {
    console.log(`single-task-entry update-value received ${value.json}`);
    if (value.axis) {
      let val = this.task.values.find( el => el.axis._id === value.axis._id );
      // If we didn't find an axis match, look for a null and give it the new axis
      if (!val) {
        val = this.task.values.find( el => el.axis === null);
        val.axis = value.axis;
        val.axisId = value.axis._id;
        this.availableAxes.splice(this.availableAxes.indexOf(value.axis), 1);
      }
      val.value = value.value;
    }
  }

  public saveTask() {
    this.taskServ.saveTask(this.task);
    this.resetTask();
  }
}
