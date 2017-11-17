import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Axis } from '../models/Axis';
import { Task } from '../models/Task';
import { AxisService } from '../services/axis.service';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

  axes: Axis[] = [];
  tasks: Task[] = [];

  currentTask: Task;

  constructor(
    private axisServ: AxisService,
    private taskServ: TaskService
  ) { }

  ngOnInit() {
    this.axisServ.allAxes().subscribe( response => { this.axes = response; } );
    this.taskServ.currentTask$.subscribe( currTask => { this.currentTask = currTask; } );
  }

  public taskComplete(task: Task) {
    console.log(`Dashboard registered task ${JSON.stringify(task)} complete, passing to TaskService`);
    this.taskServ.taskComplete(task);
  }

  public resetTasks() {
    this.taskServ.reset();
  }
}
