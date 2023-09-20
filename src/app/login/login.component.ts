import { Component, OnInit, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { User } from '../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  fb: FormBuilder = inject(FormBuilder);
  loginService: LoginService = inject(LoginService);
  router: Router = inject(Router);
  loginForm!: FormGroup;
  errorMessage!: string;
  //isAuthenticated: boolean = false;
  constructor() {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmitForm() {
    const email = this.loginForm.get('email')!.value;
    const password = this.loginForm.get('password')!.value;
    const newUser: User = {
      email,
      password,
    };
    this.login(newUser);
  }

  login(user: User) {
    this.loginService
      .checkUser(user)
      .then((result) => {
        this.errorMessage = '';
        this.loginService.isAuthenticated = true;
        //isAuthenticated: boolean = true;
        console.log('result ' + result.user?.email);
        this.router.navigateByUrl('');
      })
      .catch((error) => {
        this.loginService.isAuthenticated = false;
        //isAuthenticated: boolean = false;
        this.errorMessage = 'Echec connexion, veuillez réessayer';
      });
  }
}
