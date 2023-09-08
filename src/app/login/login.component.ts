import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Administrateur } from '../model/administrateur';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  newAdmin!: Administrateur;
  constructor(private fb: FormBuilder) {}

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
    this.newAdmin = {
      pseudo,
      password,
    };
    this.verifAdmin(this.newAdmin);
  }

  verifAdmin(admin: Administrateur) {}
}
