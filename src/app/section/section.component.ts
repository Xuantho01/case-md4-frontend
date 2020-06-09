import { Component, OnInit } from '@angular/core';
import {CartServiceService} from '../cart-service.service';
import {Category} from '../model/Category';
import {CategoryServiceService} from '../category-service.service';
import {FoodServiceService} from '../food-service.service';
import {Food} from '../model/Food';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
  categoryList: Category[];
  foodList: Food[];
  constructor(private cart: CartServiceService, private categoryService: CategoryServiceService, private foodService: FoodServiceService) {}
    addCart(){
    this.cart.addCart();
  }
  ngOnInit(){
    this.categoryService.getAll().subscribe(result => {
      this.categoryList = result;
    });
    // this.foodService.getAll().subscribe(result => {
    //   this.foodList = result;
    // });
  }
  showNav(){
    const x = document.getElementById('nav-bar');
    if (x.style.display === 'none') {
      x.style.display = 'block';
    } else {
      x.style.display = 'none';
    }
  }
}
