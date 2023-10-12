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
  private readonly fb: FormBuilder = inject(FormBuilder);
  private readonly loginService: LoginService = inject(LoginService);
  private readonly router: Router = inject(Router);
  loginForm!: FormGroup;
  errorMessage!: string;
  //isAuthenticated: boolean = false;
  constructor() {}

  ngOnInit(): void {
    this.initForm();
  }
  /**
   * Définition du formulaire de connexion
   */
  initForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  /**
   * Récupère les données du formulaire et appel de la fonction login()
   */
  onSubmitForm() {
    const email = this.loginForm.get('email')!.value;
    const password = this.loginForm.get('password')!.value;
    this.login(email, password);
  }

  /**
   * Connecter l'utilisateur
   * @param email string - email de l'utilisateur
   * @param password string - mot de passe de l'utilisateur
   */
  async login(email: string, password: string): Promise<void> {
    await this.loginService
      .checkUser(email, password)
      .then((result) => {
        this.errorMessage = '';
        this.loginService.isAuthenticated = true;
        this.router.navigateByUrl('');
      })
      .catch((error) => {
        this.loginService.isAuthenticated = false;
        this.errorMessage = 'Echec connexion, veuillez réessayer';
      });
  }
}
