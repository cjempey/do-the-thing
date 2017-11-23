import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-task-value',
  templateUrl: './task-value.component.html',
  styleUrls: ['./task-value.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TaskValueComponent implements OnInit {

  ratings = [1, 2, 3, 4, 5];
  value: Number = 0;
  rating: Number = 0;

  constructor() { }

  ngOnInit() {
  }

  public starIcon(index): string {
    if (index <= this.rating) {
       return 'star';
    } else if (this.rating === index + 0.5) {
      return 'star_half';
    } else {
      return 'star_border';
    }
  }

  public setRating(rate: Number) {
    this.rating = rate;
  }

  public setValue(rate: Number) {
    this.value = rate;
  }
}
