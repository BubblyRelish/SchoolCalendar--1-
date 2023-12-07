// authentication.service.ts
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private router: Router) {}

  logout() {
    // Perform any necessary cleanup or sign-out logic

    // Navigate to the login page
    this.router.navigate(['/login']);
  }
}
