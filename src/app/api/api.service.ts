import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ApiService {
  private basePath = 'http://localhost:3000';

  messages = [];
  users = [];

  constructor(
    private http: Http
  ) { }

  getMessages(userId) {
    return this.http.get(`${this.basePath}/posts/${userId}`).subscribe(resp => {
      this.messages = resp.json();
    });
  }

  postMessage(formValues) {
    return this.http.post(`${this.basePath}/post`, formValues).subscribe(resp => {

    });
  }

  getUsers() {
    return this.http.get(`${this.basePath}/users`).subscribe(resp => {
      this.users = resp.json();
    });
  }

  getProfile(id) {
    return this.http.get(`${this.basePath}/profile/${id}`);
  }
}
