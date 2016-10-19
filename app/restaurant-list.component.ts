import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Restaurant } from './restaurant.model';

@Component ({
  selector: 'restaurant-list',
  template: `
    <div class="container">
      <div class="row">
        <div class="col-sm-5">
          <h3>Our Restaurants!</h3>
          <div *ngFor="let currentRestaurant of childRestaurantList">
            <restaurant-display [restaurant]="currentRestaurant"></restaurant-display>
          </div>
        </div>
      </div>
    </div>
  `
})

export class RestaurantListComponent {
  @Input() childRestaurantList: Restaurant[];
  @Output() clickSender = new EventEmitter();
}
