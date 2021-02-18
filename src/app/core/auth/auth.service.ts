import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  login(email: string, password: string) {
    if (
      email === environment.creds.email &&
      password === environment.creds.password
    ) {
      this.setToken();
      return true;
    } else {
      return false;
    }
  }

  setToken() {
    localStorage.setItem('auth_token', 'xyz');
  }

  getToken() {
    return localStorage.getItem('auth_token');
  }

  isLoggedIn() {
    if (this.getToken()) {
      return true;
    } else {
      return false;
    }
  }

  clearToken() {
    localStorage.removeItem('auth_token');
  }

  signout() {
    this.clearToken();
    this.router.navigate(['login']);
  }
}
