import { Injectable } from '@angular/core';
import {Food} from './model/Food';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from './model/Category';

@Injectable({
  providedIn: 'root'
})
export class FoodServiceService {
  urlFood = 'http://localhost:8081/api/food-list';
  constructor(private httpClient: HttpClient) {}
  getAll(): Observable<Food[]>{
    return this.httpClient.get<Food[]>(this.urlFood);
  }
}
