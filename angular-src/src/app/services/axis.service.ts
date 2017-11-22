import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Axis } from '../models/Axis';

import 'rxjs/add/operator/map';

@Injectable()
export class AxisService {

  constructor(private http: HttpClient) { }

  private serverApi = 'http://localhost:3000';

  public getAllAxes(): Observable<Axis[]> {
    const URI = `${this.serverApi}/api/axis`;
    return this.http.get(URI)
      .map(res => <Axis[]>res['axes']);
  }

  public getAxisById(id: string): Observable<Axis> {
    const URI = `${this.serverApi}/api/axis/${id}`;
    return this.http.get(URI)
      .map( res => <Axis>res['axis']);
  }

  public deleteAxis(axisId: string) {
    const URI = `${this.serverApi}/api/axis/${axisId}`;
    // const headers = new Headers;
    // headers.append('Content-Type', 'application/json');
    return this.http.delete(URI);
  }

  public addAxis(newAxis: Axis): Observable<Object> {
    const URI = `${this.serverApi}/api/axis`;
    // const headers = new Headers;
    const body = {
      name: newAxis.name,
      description: newAxis.description,
      weight: newAxis.weight
    };
    console.log (`Adding new axis: ${body}`);
    // headers.append('Content-Type', 'application/json');
    return this.http.post(URI, body);
  }

}
