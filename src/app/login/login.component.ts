import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 username = '';
  password = '';
  errorMessage = '';

  constructor(private router: Router) {}

  login() {

    const user = this.username.trim();
    const pass = this.password.trim();

    if (this.username === 'Elango' && this.password === '1234') {
      this.router.navigate(['/dashboard']);
    }
    else {
      this.errorMessage = 'Invalid credentials. Try again.';
    }
  }
}

