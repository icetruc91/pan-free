import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  username;
  password;
  login(username, password) {
    console.log([username, password]);
    this.userService.findUserByCredentials(username, password)
      .then(function (user) {
        if (user == null) {
          alert('Uth oh, it seems your username or password doesn\'t work!' +
            ' Please, try again.');
        } else {
          this.userService.login(username, password)
            .then(() => this.router.navigate( ['profile']));
        }
      });

  }

  constructor(private router: Router, private userService: UserServiceClient) {
    // selfReference = this;
  }

  ngOnInit() {
  }

}
