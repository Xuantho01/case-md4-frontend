import { Component, OnInit } from '@angular/core';
import {CartServiceService} from '../cart-service.service';
import {FoodServiceService} from '../food-service.service';
import {Food} from '../model/Food';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit {

  foodList: Food[];
  constructor(private addNewCart: CartServiceService, private foodService: FoodServiceService) {}
  ngOnInit(): void {
    this.foodService.getAll().subscribe(result => {
      this.foodList = result;
    });
  }
  addInCart(){
    this.addNewCart.addCart();
  }
}
