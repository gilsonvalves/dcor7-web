import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

interface User {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private mockUsersUrl = '/assets/mock-service/mock-users.json';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<boolean> {
    return this.http.get<{ users: User[] }>(this.mockUsersUrl).pipe(
      map(response => {
        const user = response.users.find(u => u.email === email && u.password === password);
        return !!user;
      }),
      catchError(() => of(false))
    );
  }
}
