import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';

@Component({
  selector: 'app-users-list',
  template: `
    <div *ngFor="let user of apiService.users">
      <mat-card [routerLink]="['/profile', user._id]" style="cursor: pointer;">{{user.name}}</mat-card>
    </div>
  `,
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  constructor(
    public apiService: ApiService
  ) { }

  ngOnInit() {
    this.apiService.getUsers();
  }

}
