import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { AxisService } from '../services/axis.service';
import { Axis } from '../models/Axis';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-view-axes',
  templateUrl: './view-axes.component.html',
  styleUrls: ['./view-axes.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ViewAxesComponent implements OnInit, AfterViewInit {

  displayedColumns = ['name', 'description', 'weight', 'delete'];
  dataSource: MatTableDataSource<Axis>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  private axes: Axis[] = [];

  constructor(private axisServ: AxisService) {
    this.dataSource = new MatTableDataSource(this.axes);
  }

  ngOnInit() {
    console.log('Initializing ViewAxesComponent');
    this.loadAxes();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  public loadAxes() {
    this.axisServ.allAxes().subscribe( response => {this.axes = response; this.dataSource.data = this.axes; } );
  }

  public deleteAxis(axis: Axis) {
    this.axisServ.deleteAxis(axis._id).subscribe( response => this.loadAxes() );
  }

  public onAddAxis(newAxis) {
    this.loadAxes();
  }

}
