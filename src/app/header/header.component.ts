import { Component, OnInit } from '@angular/core';
import {CartServiceService} from '../cart-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(public cartService: CartServiceService) {}
  ngOnInit(): void {
  }
}
