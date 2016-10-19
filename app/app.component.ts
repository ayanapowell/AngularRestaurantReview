import { Component } from '@angular/core';
import { Restaurant } from './restaurant.model';
import { Review } from './review.model';

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <h1 class="title">PLEY:: <span> A friendlier guide to restaurant reviews</span></h1>
      <div class="row">
        <restaurant-list
          [childRestaurantList]="masterRestaurantList"
          (addReviewSender)="addReview($event)" class="col-sm-6">
        </restaurant-list>
        <div class="col-sm-6">
          <h4>Leave a review!</h4>
          <new-review></new-review>
        </div>
      </div>
      <div class="row">
        <new-restaurant
          (newRestaurantSender)="addRestaurant($event)"
          class="col-sm-12">
        </new-restaurant>
      </div>
    </div>
  `
})

export class AppComponent {
  public masterRestaurantList: Restaurant[] = [
    new Restaurant('Noble Rot', 'Wine', '1111 E. Burnside st', '$$$', ["so good!"]),
    new Restaurant('Imperial', 'New American', '455 SW Broadway ave', '$$$', ["The pork chops is a must have!"]),
    new Restaurant('Le Happy', 'French', '2345 NW Johnsone st', '$$$$', ["I love their savory crepes", "i love their sweet crepes"]),
    new Restaurant('Bollywood Theatre', 'Indian','4544 NE Alberta ave', '$$', ["Kati roll, kati roll, kati roll is everything you need in life!"]),
    new Restaurant('The Whole Bowl', 'Vegetarian bowls', '922 SW Alder st', '$', ["cheap and delish"])
  ];

  selectedRestaurant: Restaurant;
  setRestaurant(selected_restaurant: Restaurant) {
    this.selectedRestaurant = selected_restaurant;
  }
  addRestaurant(newRestaurant: Restaurant) {
     this.masterRestaurantList.push(newRestaurant);
  }

  addReview(newReview: Review) {
    this.selectedRestaurant.reviews.push(newReview.name, newReview.review);
  }
}
