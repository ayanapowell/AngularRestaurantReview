import { Component } from '@angular/core';
import { Restaurant } from './restaurant.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1 class="title">PLEY:: <span> A friendlier guide to restaurant reviews</span></h1>
    <div class="row">
      <restaurant-list
          [childRestaurantList]="masterRestaurantList"
          (clickSender)="showDetails($event)"
       class="col-sm-6"></restaurant-list>
      </div>
  </div>
  `
})

export class AppComponent {
  public masterRestaurantList: Restaurant[] = [
    new Restaurant('Noble Rot', 'Wine', '1111 E. Burnside st', '$$$',[]),
    new Restaurant('Imperial', 'New American', '455 SW Broadway ave', '$$$',[]),
    new Restaurant('Le Happy', 'French', '2345 NW Johnsone st', '$$$$',[]),
    new Restaurant('Bollywood Theatre', 'Indian','4544 NE Alberta ave', '$$', []),
    new Restaurant('The Whole Bowl', 'Vegetarian bowls', '922 SW Alder st', '$', [])
  ];

  selectedTask: Task = null;
  showDetails(clickedTask: Task) {
    this.selectedTask = clickedTask;
  }

}
