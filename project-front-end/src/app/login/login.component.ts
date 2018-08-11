import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {PersonServiceClient} from '../services/person.service.client';
let selfReference

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  logn;

  login(logn) {
    console.log([logn]);
    this.personService.findPersonByLogin(logn)
      .then(function (logn) {
        if (logn == null) {
          alert('Uth oh, it seems your username or password doesn\'t work!' +
            ' Please, try again.');
        } else {
          selfReference.personService.login(logn)
            .then(() => selfReference.router.navigate( ['profile']));
        }
      });

  }

  constructor(private router: Router, private personService: PersonServiceClient) {
    selfReference = this;
  }

  ngOnInit() {
  }

}
