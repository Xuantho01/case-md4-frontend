import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {UserService} from '../user.service';
import {getGlobalAnalytics} from '@angular/cli/models/analytics';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
  constructor(private user: FormBuilder, private userService: UserService) {}
  userForm = this.user.group({
    email: [''],
    name: [''],
    password: [''],
    phone: [''],
    username: [''],
    userRole: this.user.group({
      id: ['']
    })
  });
  ngOnInit(): void {
  }
  onsubmit(){
    this.userService.createUser(this.userForm.value).subscribe(result => {
      this.userForm.reset();
      alert('register successfully');
    }, error => {
      alert('error');
    });
  }
}
