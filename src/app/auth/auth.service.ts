import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AuthService {

  constructor(
    private http: Http
  ) { }

  registerUser(formValues) {
    return this.http.post('http://localhost:3000/register', formValues);
  }

  loginUser(formValues) {
    return this.http.post('http://localhost:3000/login', formValues);
  }
}
