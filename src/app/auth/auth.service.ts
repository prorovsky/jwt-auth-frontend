import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {
    private basePath = 'http://localhost:3000/auth';
    TOKEN_KEY = 'token';

  constructor(
    private http: HttpClient
  ) { }

  get token() {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  get isAuthenticated() {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  registerUser(formValues) {
    return this.http.post(`${this.basePath}/register`, formValues);
  }

  loginUser(formValues) {
    return this.http.post(`${this.basePath}/login`, formValues);
  }

  saveToken(token) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }
}
