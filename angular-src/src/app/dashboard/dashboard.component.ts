import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Task } from '../models/Task';
import { TaskService } from '../services/task.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None,

})
export class DashboardComponent implements OnInit {

  tasks: Task[] = [];

  // currentTask: Task;

  constructor(
    private taskServ: TaskService
  ) { }

  ngOnInit() {
    this.taskServ.currentTask$.subscribe( currTask => {
      console.log (`dashboard received new current task: ${currTask}`);
      this.tasks.push( currTask );
      console.log (`dashboard now has ${this.tasks.length} current tasks registered`);
    } );
  }

  public taskComplete(task: Task) {
    // console.log(`Dashboard registered task ${JSON.stringify(task)} complete, passing to TaskService`);
    const taskIndex = this.tasks.indexOf(task);
    this.tasks.splice(taskIndex, 1);
    this.taskServ.taskComplete(task);
  }

  public resetTasks() {
    this.taskServ.reset();
  }
}
