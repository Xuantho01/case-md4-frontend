import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from './model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  urlUser = 'http://localhost:8081/api/register';
  createUser(user: User){
    return this.httpClient.post<User>(this.urlUser, user);
  }
  getAllUser(): Observable<User[]> {
   return this.httpClient.get<User[]>(this.urlUser);
  }
  constructor(private httpClient: HttpClient) { }
}
