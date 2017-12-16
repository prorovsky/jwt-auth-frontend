import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {
  private basePath = 'http://localhost:3000';

  messages = [];
  users = [];

  constructor(
    private http: HttpClient
  ) { }

  getMessages(userId) {
    return this.http.get<Array<any>>(`${this.basePath}/posts/${userId}`).subscribe(resp => {
      this.messages = resp;
    });
  }

  postMessage(formValues) {
    return this.http.post(`${this.basePath}/post`, formValues).subscribe(resp => {
      console.log(resp);
    });
  }

  getUsers() {
    return this.http.get<Array<any>>(`${this.basePath}/users`).subscribe(resp => {
      this.users = resp;
    });
  }

  getProfile(id) {
    return this.http.get(`${this.basePath}/profile/${id}`);
  }
}
