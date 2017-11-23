import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Task, TaskValue } from '../models/Task';
// import { Axis } from '../models/Axis';

import { AxisService } from './axis.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';

@Injectable()
export class TaskService {
  tasks: Task[] = [];

  private defaultTask: Task = {
    name: 'Enter more tasks!',
    description: 'You\'ve completed all the tasks I know about.  Enter more to keep going!',
    status: 'Not Started',
    values: []
  };

  constructor(private http: HttpClient, private axisServ: AxisService) {
    this.reset();
  }


  private serverApi = 'http://localhost:3000';

  private currentTaskProvider = new Subject<Task>();

  currentTask$ = this.currentTaskProvider.asObservable();

  reset() {
    this.getAllTasks().subscribe(tasks => {
      this.tasks = tasks;
      this.currentTaskProvider.next(this.tasks.pop());
    });
  }

  public taskComplete(task: Task) {
    console.log(`TaskService registered task ${JSON.stringify(task)} complete, calculating next task`);
    // TODO: Mark incoming task as completed
    // update DB
    // calculate next current task
    // notify observers
    this.currentTaskProvider.next(this.tasks.pop() || this.defaultTask);
  }

  private dbDocToTask(element): Task {
    const newTask: Task = {
      name: element.name,
      description: element.description,
      status: element.status,
      values: []
    };
    element.values.forEach( val => {
      const valStruct: TaskValue = { axis: null, axisId: val.axis, value: val.value };
      const axisId = val.axis;
      this.axisServ.getAxisById(axisId).subscribe( axis => valStruct.axis = axis );
      newTask.values.push(valStruct);
    });
    return newTask;
  }

  public getAllTasks(): Observable<Task[]> {
    console.log('Fetching all tasks from DB...');
    const URI = this.serverApi + '/api/task/';
    return this.http.get(URI)
      .map( resp => {
        const tasklist: Task[] = [];
        resp['tasks'].forEach(element => {
          tasklist.push(this.dbDocToTask(element));
        });
        return tasklist;
      });
  }
}
