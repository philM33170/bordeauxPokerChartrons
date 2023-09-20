import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../services/account.service';
import { User } from '../model/user';
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
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmitForm() {
    const email = this.registrationForm.get('email')!.value;
    const password = this.registrationForm.get('password')!.value;
    const newUser: User = {
      email,
      password,
    };
    //this.createAdmin(newAdmin);
    this.createUser(newUser);
  }

  /*createAdmin(admin: Administrateur) {
    this.accountService.createAdmin(admin).subscribe({
      next: (data) => {
        if (data === true) {
          console.log('création ok' + ' ' + data);
          console.log(administrateurs);
        } else {
          console.log('création ko' + ' ' + data);
          console.log(administrateurs);
        }
      },
    });
  }*/
  createUser(user: User) {
    this.accountService
      .register(user.email, user.password)
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
