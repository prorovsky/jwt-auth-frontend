import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>
          <h4>Вход</h4>
        </mat-card-title>
      </mat-card-header>
      <form>
        <mat-input-container>
          <input [(ngModel)]="loginData.email" name="email" matInput placeholder="почта" type="email">
        </mat-input-container>
        <mat-input-container>
          <input [(ngModel)]="loginData.password" name="password" matInput placeholder="пароль" type="password">
        </mat-input-container>
        <button (click)="login()" mat-raised-button color="primary">Вход</button>
      </form>
    </mat-card>
  `,
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData = {};

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  login() {
    this.authService.loginUser(this.loginData).subscribe(data => {
      this.authService.saveToken(data['token']);
    });
  }

}
