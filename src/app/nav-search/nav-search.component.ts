import { Component, OnInit } from '@angular/core';
import {CategoryServiceService} from '../category-service.service';
import {Category} from '../model/Category';

@Component({
  selector: 'app-nav-search',
  templateUrl: './nav-search.component.html',
  styleUrls: ['./nav-search.component.css']
})
export class NavSearchComponent implements OnInit {
  categoryList: Category[];
  constructor(private categoryService: CategoryServiceService) {
  }
  ngOnInit() {
    this.categoryService.getAll().subscribe( result => {
      console.log(result);
      this.categoryList = result;
    });
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
