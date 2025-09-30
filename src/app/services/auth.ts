import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { LoginResponse } from '../models/login-response';

@Injectable({
  providedIn: 'root'
})
export class Auth {
  private apiUrl = 'http://localhost:8083/api/auth/login';  

  constructor(private http: HttpClient) { }

  login(email: string, motDePasse: string): Observable<LoginResponse> {
    console.log('Attempting login with email:', email);
    console.log('Attempting login with password:', motDePasse);
    const body = { email, motDePasse };
    return this.http.post<LoginResponse>(this.apiUrl, body);
  }

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  logout() {
    localStorage.removeItem('token');
  } 

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
  
}
