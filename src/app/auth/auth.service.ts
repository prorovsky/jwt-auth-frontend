import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AuthService {
    private basePath = 'http://localhost:3000/auth';

  constructor(
    private http: Http
  ) { }

  registerUser(formValues) {
    return this.http.post(`${this.basePath}/register`, formValues);
  }

  loginUser(formValues) {
    return this.http.post(`${this.basePath}/login`, formValues);
  }
}
