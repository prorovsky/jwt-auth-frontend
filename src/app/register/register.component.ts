import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-register',
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>
          <h4>Новый пользователь</h4>
        </mat-card-title>
      </mat-card-header>
      <form>
        <mat-input-container>
          <input [(ngModel)]="registerData.email" name="email" matInput placeholder="почта" type="email">
        </mat-input-container>
        <mat-input-container>
          <input [(ngModel)]="registerData.password" name="password" matInput placeholder="пароль" type="password">
        </mat-input-container>
        <button (click)="post()" mat-raised-button color="primary">Регистрация</button>
      </form>
    </mat-card>
  `,
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerData = {};

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  post() {
    this.authService.registerUser(this.registerData).subscribe();
  }
}
