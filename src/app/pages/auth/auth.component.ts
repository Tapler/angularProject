import { Component, OnInit } from '@angular/core';
import { IAuthUser, IUser } from '../../models/interfaces/user';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  users: IUser[] = [
    {
      login: 'sidorov',
      password: 'qwerty123',
      fio: 'Sidorov Igor'
    },
    {
      login: 'ivanov',
      password: 'qwerty456',
      fio: 'Ivanov Ivan'
    },
    {
      login: 'petrov',
      password: 'qwerty789',
      fio: 'Petrov Petr'
    },
  ];

  loginForm: FormGroup | undefined;

  currentAuth: IAuthUser = { login: '', password: '' };

  public get loginFormGroup(): FormGroup {
    return this.loginForm as FormGroup;
  }

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.initControls();
  }

  ngOnInit(): void {
    localStorage.removeItem('user');
  }

  identify(): void {
    const user = this.users.find(us => us.login === this.currentAuth.login && us.password === this.currentAuth.password);
    if (!!user) {
      localStorage.setItem('user', JSON.stringify(user));
      this.router.navigate(['home']);
    } else {
      alert('Идентификация провалилась');
    }
  }

  private initControls(): void {
    this.loginForm = this.fb.group({
      login: '',
      password: ''
    });
    this.loginForm.valueChanges.subscribe(res => this.currentAuth = { ...res });
  }

}
