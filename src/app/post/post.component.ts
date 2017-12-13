import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';

@Component({
  selector: 'app-post',
  template: `
  <mat-card>
    <mat-card-header>
      <mat-card-title>
        <h4>Новое сообщение</h4>
      </mat-card-title>
    </mat-card-header>
    <form>
      <mat-input-container style="width: 50%;">
        <textarea [(ngModel)]="postMessage" name="postMessage" matInput placeholder="текст сообщения"></textarea>
      </mat-input-container>
      <br>
      <button (click)="post()" mat-raised-button color="primary">Отправить</button>
    </form>
  </mat-card>
  `,
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  postMessage = '';

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {

  }

  post() {
    this.apiService.postMessage({message: this.postMessage});
  }

}
