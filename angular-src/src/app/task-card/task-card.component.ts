import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../models/Task';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css'],
  // encapsulation: ViewEncapsulation.None,

})
export class TaskCardComponent implements OnInit {

  @Input() task: Task;
  @Output() taskComplete = new EventEmitter<Task>();

  constructor() { }

  ngOnInit() {
  }

  taskDone() {
    // console.log(`Task card registered task ${this.task} complete, emitting event`);
    this.taskComplete.emit(this.task);
  }
}
