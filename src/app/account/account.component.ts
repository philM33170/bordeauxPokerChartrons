import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Administrateur } from '../model/administrateur';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  registrationForm!: FormGroup;

  newAdmin!: Administrateur;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.registrationForm = this.fb.group({
      pseudo: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmitForm() {
    const pseudo = this.registrationForm.get('pseudo')!.value;
    const password = this.registrationForm.get('password')!.value;
    this.newAdmin = {
      pseudo,
      password,
    };
    this.createAdmin(this.newAdmin);
  }

  createAdmin(admin: Administrateur) {}
}
