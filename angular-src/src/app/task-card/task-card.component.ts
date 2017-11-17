import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../models/Task';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css'],
  encapsulation: ViewEncapsulation.None,
  animations: [
      trigger('task', [
        state('in', style({transform: 'translateX(0)'})),
        transition('void => *', [
          style({transform: 'translateX(-100%)'}),
          animate(100)
        ]),
        transition('* => void', [
          animate(100, style({transform: 'translateX(100%)'}))
        ])
      ])
    ]
  }
)
export class TaskCardComponent implements OnInit {

  @Input() task: Task;
  @Output() taskComplete = new EventEmitter<Task>();

  constructor() { }

  ngOnInit() {
  }

  taskDone() {
    console.log(`Task card registered task ${this.task} complete, emitting event`);
    this.taskComplete.emit(this.task);
  }
}
