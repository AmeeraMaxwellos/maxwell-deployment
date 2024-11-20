import { CommonModule, NgIf } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthServiceService } from '../../../../services/auth-service.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-login-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgIf],
  templateUrl: './login-register.component.html',
  styleUrl: './login-register.component.css'
})
export class LoginRegisterComponent implements OnInit, OnDestroy {
  loginForm!: FormGroup;
  authService = inject(AuthServiceService);
  router = inject(Router);
  errorMessage!: string | null;
  isPasswordVisible = false;
  private valueChangesSubscription!: Subscription;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {
    this.valueChangesSubscription = this.loginForm.valueChanges.subscribe(() => {
      this.errorMessage = '';
    });
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const rawForm = this.loginForm.getRawValue();
      this.authService.login(rawForm.email, rawForm.password).subscribe({
        next: () => {
          this.router.navigateByUrl('/');
        },
        error: (error) => {
          this.errorMessage = 'Wrong username or password! Please try again.';
        }
      });
    }

  }

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  ngOnDestroy(): void {
    if (this.valueChangesSubscription) {
      this.valueChangesSubscription.unsubscribe();
    }
  }
}