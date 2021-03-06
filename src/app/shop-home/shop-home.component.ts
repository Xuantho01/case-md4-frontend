import { Component, OnInit } from '@angular/core';
import {CategoryServiceService} from '../category-service.service';
import {Category} from '../model/Category';

@Component({
  selector: 'app-shop-home',
  templateUrl: './shop-home.component.html',
  styleUrls: ['./shop-home.component.css']
})
export class ShopHomeComponent implements OnInit {

  constructor(private categoryService: CategoryServiceService) {
  }
  categoryList: Category[];
  showNav(){
    const x = document.getElementById('nav-bar');
    if (x.style.display === 'none') {
      x.style.display = 'block';
    } else {
      x.style.display = 'none';
    }
  }
  ngOnInit(): void {
  this.categoryService.getAll().subscribe(reslt => {
    this.categoryList = reslt;
  });
  }
}
