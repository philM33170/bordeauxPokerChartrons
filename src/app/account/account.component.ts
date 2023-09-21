import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  fb: FormBuilder = inject(FormBuilder);
  accountService: AccountService = inject(AccountService);
  router: Router = inject(Router);
  registrationForm!: FormGroup;
  message: string = '';

  constructor() {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.registrationForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmitForm() {
    const email = this.registrationForm.get('email')!.value;
    const password = this.registrationForm.get('password')!.value;
    const name = this.registrationForm.get('name')!.value;
    this.createUser(email, password, name);
  }

  async createUser(email: string, password: string, name: string) {
    await this.accountService
      .register(email, password, name)
      .then((result) => {
        this.message = '';
        this.registrationForm.reset();
        this.router.navigateByUrl('auth/signin');
      })
      .catch((error) => {
        this.message = 'Echec inscription, veuillez réessayer';
      });
  }
}
