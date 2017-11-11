import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import {Axis} from '../models/Axis';

@Component({
  selector: 'app-axis-card',
  templateUrl: './axis-card.component.html',
  styleUrls: ['./axis-card.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AxisCardComponent implements OnInit {

  @Input() axis: Axis;

  constructor() { }

  ngOnInit() {
  }

}
