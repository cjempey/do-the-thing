import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Axis } from '../models/Axis';
import { AxisService } from '../services/axis.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

  axes: Axis[] = [];

  constructor(private axisServ: AxisService) { }

  ngOnInit() {
    this.axisServ.allAxes().subscribe( response => { this.axes = response; } );
  }

}
