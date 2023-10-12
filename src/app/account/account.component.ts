import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../services/account.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './modal.component';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  private readonly fb: FormBuilder = inject(FormBuilder);
  private readonly accountService: AccountService = inject(AccountService);
  private readonly router: Router = inject(Router);
  registrationForm!: FormGroup;
  message: string = '';
  private readonly dialog: MatDialog = inject(MatDialog);
  constructor() {}

  ngOnInit(): void {
    this.initForm();
  }

  /**
   * Définition du formulaire de création de compte
   */
  initForm(): void {
    this.registrationForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  /**
   * Récupère les données du formulaire et appel de la fonction createUser()
   */
  onSubmitForm() {
    const email = this.registrationForm.get('email')!.value;
    const password = this.registrationForm.get('password')!.value;
    const name = this.registrationForm.get('name')!.value;
    this.createUser(email, password, name);
  }

  /**
   * Créer un utilisateur en BDD Firebase
   * @param email string - email de l'utilisateur
   * @param password string - mot de passe de l'utilisateur
   * @param name string - nom de l'utilisateur
   */
  async createUser(
    email: string,
    password: string,
    name: string
  ): Promise<void> {
    await this.accountService
      .register(email, password, name)
      .then((result) => {
        this.message = '';
        this.registrationForm.reset();
        this.opendialog();
        this.router.navigateByUrl('auth/signin');
      })
      .catch((error) => {
        this.message = 'Echec inscription, veuillez réessayer';
      });
  }

  /**
   * Appel de la fonction open() pour ouvrir la modal ModalComponent
   */
  opendialog() {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '450px',
    });
  }
}
