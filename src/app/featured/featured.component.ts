import { Component, OnInit } from '@angular/core';
import {CartServiceService} from '../cart-service.service';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit {

  constructor(private addNewCart: CartServiceService) {}
  ngOnInit(): void {
  }
  addInCart(){
    this.addNewCart.addCart();
  }
}
