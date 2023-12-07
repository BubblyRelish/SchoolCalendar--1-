import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ViewEventPage } from './view-event.page';

import { IonicModule } from '@ionic/angular';

import { ViewEventPageRoutingModule } from './view-event-routing.module';
import { Calendar } from '@awesome-cordova-plugins/calendar/ngx'
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewEventPageRoutingModule
  ],
  declarations: [ViewEventPage],
  providers: [Calendar, InAppBrowser]
})
export class ViewEventPageModule {}
