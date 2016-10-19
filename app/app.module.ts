import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }  from '@angular/forms';
import { AppComponent } from './app.component';
import { RestaurantListComponent } from './restaurant-list.component';
import { RestaurantComponent } from './restaurant.component';
import { NewReviewComponent } from './new-review.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    RestaurantListComponent,
    RestaurantComponent,
    NewReviewComponent,
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
