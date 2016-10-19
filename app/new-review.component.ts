import { Component, Output, Input, EventEmitter } from '@angular/core';
import { Restaurant } from './restaurant.model';
import { Review } from './review.model';

@Component({
  selector: 'new-review',
  template: `
    <div class="container">

        <div class="form-group reviewForm">
          <input #newName type="text" class="form-control" placeholder="your name">
        </div>
        <div class="form-group reviewForm">
          <textarea #newReview class="form-control" placeholder="specialty"></textarea>
        </div>
        <button (click)="
        addReview(newName.value, newReview.value);
        newName.value = '';
        newReview.value = '';
        " class="btn btn-default">Add</button>
    </div>
  `
})

export class NewReviewComponent {
  @Output() addReviewSender = new EventEmitter();
  @Input() childRestaurantList: Restaurant[];
  addReview(name: string, review: string) {
    var newReviewForRestaurant: Review = new Review(name, review);
    this.addReviewSender.emit(newReviewForRestaurant);
  }
}
