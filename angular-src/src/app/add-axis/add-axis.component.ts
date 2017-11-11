import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { AxisService } from '../services/axis.service';
import { Axis } from '../models/Axis';

@Component({
  selector: 'app-add-axis',
  templateUrl: './add-axis.component.html',
  styleUrls: ['./add-axis.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddAxisComponent implements OnInit {

  private newAxis: Axis;

  @Output() addAxis: EventEmitter<Axis> = new EventEmitter<Axis>();

  constructor(private AxisServ: AxisService) { }

  ngOnInit() {
    this.newAxis = {
      name: '',
      description: '',
      weight: 0,
      _id: ''
    };
  }

  public onSubmit() {
    this.AxisServ.addAxis(this.newAxis).subscribe(
      response => {if (response.success === true) {
        console.log(response);
        // if success, update view-axis component
        this.addAxis.emit(this.newAxis);
        this.newAxis = {
          name: '',
          description: '',
          weight: 0,
          _id: ''
        };
      }
    });
  }
}
