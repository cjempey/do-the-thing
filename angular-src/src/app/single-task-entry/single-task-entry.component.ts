import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Task } from '../models/Task';

@Component({
  selector: 'app-single-task-entry',
  templateUrl: './single-task-entry.component.html',
  styleUrls: ['./single-task-entry.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SingleTaskEntryComponent implements OnInit {

  task: Task;

  constructor() { }

  ngOnInit() {
    this.task = {
      name: '',
      description: '',
      status: 'Not Started',
      values: []
    };
  }

}
