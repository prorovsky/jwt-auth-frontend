import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerData = {
    name: '',
    description: '',
    email: '',
    password: ''
  };

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  post() {
    this.authService.registerUser(this.registerData).subscribe(data => {
      this.authService.saveToken(data['token']);
    });
  }
}
