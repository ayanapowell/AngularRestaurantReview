import { Component, Output, EventEmitter } from '@angular/core';
import { Restaurant } from './restaurant.model';
import { Review } from './review.model';

@Component({
  selector: 'new-restaurant',
  template: `
    <div class="container">

        <div class="form-group">
          <input #newName type="text" class="form-control" placeholder="your name">
        </div>
        <div class="form-group">
          <input #newSpecialty type="text" class="form-control" placeholder="specialty">
        </div>
        <div class="form-group">
          <input #newAddress type="text" class="form-control" placeholder="address">
        </div>
        <div class="form-group">
          <input #newPrice type="text" class="form-control" placeholder="$$$$">
        </div>
        <button (click)="
        addClicked(newName.value, newSpecialty.value, newAddress.value, newPrice.value);
        newName.value = '';
        newSpecialty.value = '';
        newAddress.value ='';
        newPrice.value ='';
        " class="btn btn-default prompt">Add</button>

    </div>
  `
})

export class NewRestaurantComponent {
  @Output() newRestaurantSender = new EventEmitter();

  addClicked(name: string, specialty: string, address: string, price: string) {
    var newRestaurant: Restaurant = new Restaurant(name, specialty, address, price, ["review"]);
    this.newRestaurantSender.emit(newRestaurant);
  }
}

  // @Output() newReviewSender = new EventEmitter();
  // addClicked(name: string, review: string) {
  //   var newReviewToAdd: Review = new Review(name, description);
  // }
  // this.newReviewSender.emit(newReviewToAdd);
