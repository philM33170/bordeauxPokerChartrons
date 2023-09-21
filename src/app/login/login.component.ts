import { Component, OnInit, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

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
    this.login(email, password);
  }

  async login(email: string, password: string) {
    await this.loginService
      .checkUser(email, password)
      .then((result) => {
        this.errorMessage = '';
        this.loginService.isAuthenticated = true;
        console.log('result ' + result.user?.email);
        this.router.navigateByUrl('');
      })
      .catch((error) => {
        this.loginService.isAuthenticated = false;
        this.errorMessage = 'Echec connexion, veuillez réessayer';
      });
  }
}
