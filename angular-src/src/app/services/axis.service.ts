import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Axis } from '../models/Axis';

import 'rxjs/add/operator/map';

@Injectable()
export class AxisService {

  constructor(private http: Http) { }

  private serverApi = 'http://localhost:3000';

  public allAxes(): Observable<Axis[]> {
    const URI = `${this.serverApi}/api/axis`;
    return this.http.get(URI)
      .map(res => res.json())
      .map(res => <Axis[]>res.axes);
  }

  public deleteAxis(axisId: string) {
    const URI = `${this.serverApi}/api/axis/${axisId}`;
    const headers = new Headers;
    headers.append('Content-Type', 'application/json');
    return this.http.delete(URI, {headers})
      .map(res => res.json());
  }

  public addAxis(newAxis: Axis) {
    const URI = `${this.serverApi}/api/axis`;
    const headers = new Headers;
    const body = JSON.stringify({
      name: newAxis.name,
      description: newAxis.description,
      weight: newAxis.weight
    });
    console.log (`Adding new axis: ${body}`);
    headers.append('Content-Type', 'application/json');
    return this.http.post(URI, body, {headers: headers})
      .map(res => res.json());
  }

}
