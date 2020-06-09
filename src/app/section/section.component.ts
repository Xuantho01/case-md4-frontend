import { Component, OnInit } from '@angular/core';
import {CartServiceService} from '../cart-service.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  constructor(private cart: CartServiceService) { }
  addCart(){
    this.cart.addCart();
  }
  ngOnInit(): void {
  }

}
