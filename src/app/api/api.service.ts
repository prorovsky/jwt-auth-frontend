import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ApiService {
  messages: Array<object>;

  constructor(
    private http: Http
  ) { }

  getMessages() {
    return this.http.get('http://localhost:3000/posts').subscribe(resp => {
      this.messages = resp.json();
    });
  }
}
