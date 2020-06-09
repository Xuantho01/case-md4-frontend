import { Injectable } from '@angular/core';
import {Cart} from './model/Cart';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  cart: Cart = { numInCart: 0};
  addCart(){
    this.cart.numInCart++;
  }
  constructor() {}
}
