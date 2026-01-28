import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../auth';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  username = '';
  password = '';

  loading = false;
  error = false;

  constructor(
    private auth: Auth,
    private router: Router
  ) {}

  onSubmit(): void {
    this.loading = true;
    this.error = false;

    this.auth.login(this.username, this.password).subscribe({
      next: (res) => {
        localStorage.setItem('token', res.token);
        this.loading = false;
        this.router.navigate(['/products']);
      },
      error: () => {
        this.loading = false;
        this.error = true;
      }
    });
  }
}
