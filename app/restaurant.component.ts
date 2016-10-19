import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Restaurant } from './restaurant.model';
import { Review } from './review.model';

@Component ({
  selector: 'restaurant-display',
  template: `
  <div class="well currentRestaurant">
    <h4 class="restaurant">{{ restaurant.name }} <span>- {{ restaurant.specialty }}</span></h4>
    <p>{{ restaurant.address }}</p>
    <p>Price estimate: {{ restaurant.price }}</p>
    <h5 class="reviewTitle">Reviews:</h5>
    <p class="reviews">{{ restaurant.reviews}}</p>

    <button (click)="addReview()"class="btn">add a review</button>
  </div>
  `
})
export class RestaurantComponent {
  @Input() restaurant: Restaurant;

}
