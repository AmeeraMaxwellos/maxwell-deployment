import { CommonModule, NgClass, NgIf } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthServiceService } from '../../../../services/auth-service.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-user-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.css'
})
export class UserRegisterComponent implements OnInit, OnDestroy {
  registerForm!: FormGroup;
  authService = inject(AuthServiceService);
  router = inject(Router);
  errorMessage!: string | null;
  isPasswordVisible: boolean = false;
  private valueChangesSubscription!: Subscription; 

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {
    this.valueChangesSubscription = this.registerForm.valueChanges.subscribe(() => {
      this.errorMessage = '';
    });
  }

  createForm() {
    this.registerForm = this.fb.group({
      username: ['',[Validators.required,Validators.minLength(3),Validators.pattern('^[a-zA-Z]+$'), ],],
      mobile: ['',[Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),],],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const rawForm = this.registerForm.getRawValue();
      this.authService.register(rawForm.email, rawForm.password).subscribe({
        next: () => {
          this.router.navigateByUrl('/');
        },
        error: (error) => {
          switch (error.code) {
            case 'auth/email-already-in-use':
              this.errorMessage = 'This email is already registered. Please log in to continue.';
              break;
            case 'auth/invalid-email':
              this.errorMessage = 'The email address is invalid. Please enter a valid email address.';
              break;
            case 'auth/operation-not-allowed':
              this.errorMessage = 'Email/password accounts are not enabled. Please contact support.';
              break;
            case 'auth/weak-password':
              this.errorMessage = 'The password is too weak. Please enter a stronger password (at least 6 characters).';
              break;
            default:
              this.errorMessage = 'An unknown error occurred. Please try again later.';
          }
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