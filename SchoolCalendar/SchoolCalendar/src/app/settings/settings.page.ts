// landing.page.ts
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss'],
})
export class SettingsPage implements OnInit {
  userName: string = '';
  userImageUrl: string = '';
  userEmail: string = ''; // Add these properties
  userFamilyName: string = '';
  userId: string = '';

  constructor(private authService: AuthenticationService) {}

  ionViewDidEnter() {
    const userString = localStorage.getItem('user');
    if (userString) {
      try {
        const user = JSON.parse(userString);

        if (user && user.givenName && user.imageUrl && user.email && user.familyName && user.id) {
          this.userName = user.givenName;
          this.userImageUrl = user.imageUrl;
          this.userEmail = user.email; // Add these lines
          this.userFamilyName = user.familyName;
          this.userId = user.id;
          console.log('User name:', this.userName);
        } else {
          console.error('User object is missing some properties:', user);
        }
      } catch (error) {
        console.error('Error parsing user object:', error);
      }
    } else {
      console.error('User information not found in local storage.');
    }
  }

  ngOnInit() {}

  logout() {
    this.authService.logout();
  }
}
