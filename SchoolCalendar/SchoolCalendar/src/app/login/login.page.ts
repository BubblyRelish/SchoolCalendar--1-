import { Component, NgZone } from '@angular/core';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { Router } from '@angular/router';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  private googleAuthInitialized = false;

  constructor(private zone: NgZone, private router: Router) {}

  async ngOnInit() {
    await this.initializeGoogleAuth();
  }

  async initializeGoogleAuth() {
    try {
      if (!this.googleAuthInitialized) {
        await this.waitForGoogleAuth();
        GoogleAuth.initialize({
          clientId: '322135566495-1olfj6j5fvm5blplvkp4iv5ooq05a3ki.apps.googleusercontent.com',
          scopes: ['profile', 'email'],
          grantOfflineAccess: true,
        });
        this.googleAuthInitialized = true;
      }
    } catch (error) {
      console.error('Error initializing GoogleAuth', error);
    }
  }

  waitForGoogleAuth(): Promise<void> {
    return new Promise<void>((resolve) => {
      const checkAuthInterval = setInterval(() => {
        if (GoogleAuth) {
          clearInterval(checkAuthInterval);
          resolve();
        }
      }, 100);
    });
  }

  async loginWithGoogle() {
    try {
      if (!this.googleAuthInitialized) {
        await this.initializeGoogleAuth();
      }
  
      const user = await GoogleAuth.signIn();
      console.log('Google login success:', user);
  
      // Store user information in local storage or a service for later use
      localStorage.setItem('user', JSON.stringify(user));
  
      // Handle successful login
  
      // Navigate to the 'tabs' page after successful login
      this.zone.run(() => {
        this.router.navigate(['/tabs/landing']).then(
          () => console.log('Navigation successful'),
          (error) => console.error('Navigation error:', error)
        );
      });
    } catch (error) {
      console.error('Google login error:', error);
      // Handle login error
    }
  }
  
}

