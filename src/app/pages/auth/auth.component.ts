import { Component, OnInit } from '@angular/core';
import { IAuthUser } from '../../models/interfaces/user';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  loginForm: IAuthUser = {
    login: '',
    password: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

}
