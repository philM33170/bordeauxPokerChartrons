import { Component, OnInit, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
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
  /**
   * @description Variable qui représente le message d'erreur en cas d'échec de connexion.
   */
  errorMessage!: string;
  constructor() {}

  ngOnInit(): void {
    this.initLoginForm();
  }
  /**
   * @description Définition du formulaire de connexion.
   */
  initLoginForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  /**
   * @description Récupère les données du formulaire et appel de la fonction login().
   */
  onSubmitLoginForm(): void {
    const email = this.loginForm.get('email')!.value;
    const password = this.loginForm.get('password')!.value;
    this.login(email, password);
  }

  /**
   * @description Permet de connecter l'utilisateur en appelant la fonction checkUser() de loginService.
   * @param email string - email de l'utilisateur.
   * @param password string - mot de passe de l'utilisateur.
   */
  /*async login(email: string, password: string): Promise<void> {
    await this.loginService
      .checkUser(email, password)
      .then((result) => {
        this.errorMessage = '';
        this.router.navigateByUrl('');
      })
      .catch((error) => {
        this.errorMessage = 'Echec connexion, veuillez réessayer';
      });
  }*/
  login(email: string, password: string): void {
    this.loginService
      .checkUser(email, password)
      .then(() => {
        this.errorMessage = '';
        this.router.navigateByUrl('');
      })
      .catch((error) => {
        this.errorMessage = 'Echec connexion, veuillez réessayer.';
      });
  }
}
