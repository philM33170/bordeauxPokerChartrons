import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Administrateur, administrateurs } from '../model/administrateur';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  registrationForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private accountService: AccountService
  ) {}

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
    const newAdmin: Administrateur = {
      pseudo,
      password,
    };
    this.createAdmin(newAdmin);
  }

  createAdmin(admin: Administrateur) {
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
  }
}
