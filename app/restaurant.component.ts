import { Component, Input } from '@angular/core';
import { Restaurant } from './restaurant.model';

@Component ({
  selector: 'restaurant-display',
  template: `
  <div class="well currentRestaurant">
    <h4 class="restaurant">{{ restaurant.name }} <span>- {{ restaurant.specialty }}</span></h4>
    <p>{{ restaurant.address }}</p>
    <p>Pirce estimate: {{ restaurant.price }}</p>
    <button class="btn">add a review</button>
  <!--  <button (click)="seeReviews()" class="btn">see reviews</button> -->

    <new-review
      (newReviewSender)="addReview($event)">
    </new-review>
  </div>


  `
})
export class RestaurantComponent {
  @Input() restaurant: Restaurant;
  selectedRestaurant: Restaurant = null
  addReview(clickedRestaurant: Restaurant, ) {
    this.clickedRestaurant.review.push(newReview);
  }
}
