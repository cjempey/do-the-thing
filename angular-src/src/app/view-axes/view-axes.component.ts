import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AxisService } from '../services/axis.service';
import { Axis } from '../models/Axis';

@Component({
  selector: 'app-view-axes',
  templateUrl: './view-axes.component.html',
  styleUrls: ['./view-axes.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ViewAxesComponent implements OnInit {

  public axes: Axis[] = [];

  constructor(private axisServ: AxisService) { }

  ngOnInit() {
    console.log('Initializing ViewAxesComponent');
    this.loadAxes();
  }

  public loadAxes() {
    this.axisServ.allAxes().subscribe( response => this.axes = response );
  }

  public deleteAxis(axis: Axis) {
    this.axisServ.deleteAxis(axis._id).subscribe( response => this.axes = this.axes.filter(axes => axes !== axis) );
  }

}
