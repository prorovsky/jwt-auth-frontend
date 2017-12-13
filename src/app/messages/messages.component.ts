import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-messages',
  template: `
    <div *ngFor="let message of apiService.messages">
      <mat-card>{{message.message}}</mat-card>
    </div>
  `
})
export class MessagesComponent implements OnInit {
  userId: string;
  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.userId = params.get('id');
    });

    this.apiService.getMessages(this.userId);
  }
}
