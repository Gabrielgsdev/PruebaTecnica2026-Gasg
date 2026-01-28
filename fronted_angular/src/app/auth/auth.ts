import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Auth {

  private baseUrl = 'http://localhost:8080/auth';

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http.post<any>(
      `${this.baseUrl}/login`,
      { username, password }
    );
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}
