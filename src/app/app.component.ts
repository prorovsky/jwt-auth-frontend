import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar>
      Лучшая Социалка
      <button mat-button [routerLink]="['/users']">Пользователи</button>
      <span style="flex: 1 1 auto"></span>
      <button mat-button [routerLink]="['/register']">Регистрация</button>
    </mat-toolbar>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(

  ) { }

  ngOnInit() {

  }
}
