import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../core/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }
  loginForm: FormGroup;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.email],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    this.submitted = true;
    if (this.email?.errors?.match) {
      this.email.setErrors({
        match: false,
      });
      this.email.updateValueAndValidity();
    }
    if (!this.loginForm.valid) {
      Object.keys(this.loginForm.controls).forEach((key) => {
        this.loginForm.controls[key].markAsDirty();
      });
    } else {
      const loginSuccess = this.authService.login(
        this.email?.value,
        this.password?.value
      );
      if (loginSuccess) {
        this.router.navigate(['dashboard']);
      } else {
        this.email?.setErrors({
          match: true,
        });
      }
    }
  }
}
