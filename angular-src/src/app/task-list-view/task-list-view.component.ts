import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Axis } from '../models/Axis';
import { Task } from '../models/Task';
import { AxisService } from '../services/axis.service';
import { TaskService } from '../services/task.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-task-list-view',
  templateUrl: './task-list-view.component.html',
  styleUrls: ['./task-list-view.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TaskListViewComponent implements OnInit {
  axes: Axis[];
  tasks: Task[];

  dataSource: MatTableDataSource<Task>;
  displayedColumns = ['Name', 'Description'];


  constructor(private axisServ: AxisService, private taskServ: TaskService) {
    this.dataSource = new MatTableDataSource(this.tasks);
   }

  ngOnInit() {
    this.axisServ.getAllAxes().subscribe(axisList => {
      // sort axes in descending weight order
      axisList.sort( (a, b) => b.weight - a.weight );
      this.axes = axisList;
      for (const axis of axisList) {
        this.displayedColumns.push(axis.name);
      }
    });
    this.loadTasks();
  }

  loadTasks() {
    this.taskServ.getAllTasks().subscribe(taskList => {
      this.tasks = taskList;
      this.dataSource.data = taskList;
    });
  }

  getAxisValue(task: Task, axis: Axis): Number {
    // console.log(`Searching for ${JSON.stringify(axis)} in ${JSON.stringify(task.values)}`);
    const taskVal = task.values.find( el => el.axisId === axis._id );
    // console.log(`Found ${JSON.stringify(taskVal)}`);
    if (taskVal) {
      return taskVal.value;
    } else {
      return 0;
    }
  }

  applyFilter(filter) {}

}
