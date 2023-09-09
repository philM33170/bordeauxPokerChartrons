import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Administrateur } from '../model/administrateur';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  wrongCredentials = false;
  constructor(private fb: FormBuilder, private loginService: LoginService) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.fb.group({
      pseudo: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmitForm() {
    const pseudo = this.loginForm.get('pseudo')!.value;
    const password = this.loginForm.get('password')!.value;
    const newAdmin: Administrateur = {
      pseudo,
      password,
    };
    this.login(newAdmin);
  }

  login(admin: Administrateur) {
    this.wrongCredentials = false;
    this.loginService.checkAdmin(admin).subscribe(
      (result) => {
        //this.router.navigate('');
      },
      (error) => {
        this.wrongCredentials = true;
      }
    );
  }
}
