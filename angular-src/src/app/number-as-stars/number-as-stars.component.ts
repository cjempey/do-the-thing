import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-number-as-stars',
  templateUrl: './number-as-stars.component.html',
  styleUrls: ['./number-as-stars.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NumberAsStarsComponent implements OnInit {

  @Input() howMany: Number;

  items: Number[];

  constructor() {
  }

  ngOnInit() {
    console.log(`constructing ${this.howMany} stars`);
    this.items = Array(this.howMany).fill(0);
    console.log(this.items);
  }

}
