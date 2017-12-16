import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar>
      <span [routerLink]="['/']" style="cursor: pointer;">Лучшая Социалка</span>
      <button mat-button [routerLink]="['/users']">Пользователи</button>
      <span style="flex: 1 1 auto"></span>
      <button mat-button *ngIf="!authService.isAuthenticated" [routerLink]="['/register']">Регистрация</button>
      <button mat-button *ngIf="!authService.isAuthenticated" [routerLink]="['/login']">Войти</button>
      <button mat-button *ngIf="authService.isAuthenticated" (click)="authService.logout()">Выйти</button>
    </mat-toolbar>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private  authService: AuthService
  ) { }

  ngOnInit() {

  }
}
