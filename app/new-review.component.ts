import { Component } from '@angular/core';
import { Restaurant } from './restaurant.model';
import { Review } from './review.model';


@Component({
  selector: 'new-review',
  template: `
  <div class="container">
    <form id="addReview">
      <input type="text" class="form-control" placeholder="name">
      <textarea>leave a review!</textarea>
      <button (click)="addClicked(newReview.value);"class="btn btn-default prompt">Add</button>
    </form>
  </div>
  `
})

export class NewReviewComponent {
  // @Output() newReviewSender = new EventEmitter();
  // addClicked(review: string) {
  //
  // }
}
