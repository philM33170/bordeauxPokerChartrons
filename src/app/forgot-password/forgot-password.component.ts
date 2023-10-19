import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordForm!: FormGroup;
  private readonly fb: FormBuilder = inject(FormBuilder);
  private readonly loginService: LoginService = inject(LoginService);
  /**
   * @description Variable qui représente la confirmation
   * de l'envoi d'un mail pour la réinitialisation du mdp.
   */
  message!: string;
  constructor() {}

  ngOnInit(): void {
    this.initForgotPasswordForm();
  }
  /**
   * @description Définition du formulaire de mot de passe oublié.
   */
  initForgotPasswordForm() {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }
  /**
   * @description Appel la fonction sendPasswordResetEmail() de loginService pour la réinitialisation du mdp.
   */
  onSubmitForgotPasswordForm(): void {
    this.loginService
      .sendPasswordResetEmail(this.forgotPasswordForm.value.email)
      .then(() => {
        this.message =
          'Un email de réinitialisation du mot de passe a été envoyé à votre adresse.';
      });
  }
}
