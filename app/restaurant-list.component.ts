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

        <div class="col-sm-6">
          <add-review></add-review>

      <!--    <h4>Leave your review:</h4>
          <form id="addReview" class="well">
            <div class="form-group">
              <input type="text" class="form-control" placeholder="name">
            </div>
            <div class="form-group">
              <textarea class="form-control" placeholder="leave a review!"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form> -->
        </div>
      </div>
    </div>
  `
})

export class RestaurantListComponent {
  @Input() childRestaurantList: Restaurant[];
  @Output() clickSender = new EventEmitter();
  selectedRestaurant:Restaurant = null
  finishedReviewing() {
    this.selectedRestaurant = null;
  }
}
