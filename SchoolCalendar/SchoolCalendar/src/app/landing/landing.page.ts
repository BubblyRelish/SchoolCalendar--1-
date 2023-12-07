import { Component, OnDestroy, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Platform } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { CalendarService } from '../app.module';
import { AuthenticationService } from '../services/authentication.service';

// import { ChangeDetectorRef } from '@angular/core';
// constructor(private cdr: ChangeDetectorRef) {}
import { Calendar, Event } from '../services/data.service';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {
   // Initialize the property in the constructor
 userName: string = '';
// Add this property to your component
userImageUrl: string = '';

 ionViewDidEnter() {
  const userString = localStorage.getItem('user');
  if (userString) {
    try {
      const user = JSON.parse(userString);

      if (user && user.givenName && user.imageUrl) {
        this.userName = user.givenName;
        this.userImageUrl = user.imageUrl;  // Add this line
        console.log('User name:', this.userName);
      } else {
        console.error('User object does not contain givenName or imageUrl:', user);
      }
    } catch (error) {
      console.error('Error parsing user object:', error);
    }
  } else {
    console.error('User information not found in local storage.');
  }
}

  constructor(private authService: AuthenticationService) {  }

  ngOnInit() {
  }
  logout() {
    this.authService.logout();
  }
  

}
