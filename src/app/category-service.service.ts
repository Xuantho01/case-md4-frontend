import { Injectable } from '@angular/core';
import {Category} from './model/Category';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {
  urlCategory = 'http://localhost:8081/api/category-form';
  constructor(private httpClient: HttpClient) {}

    getAll(): Observable<Category[]>{
      return this.httpClient.get<Category[]>(this.urlCategory);
    }
}
