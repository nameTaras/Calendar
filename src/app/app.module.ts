import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { InputDataComponent } from './wrapper/input-data/input-data.component';
import { CalendarComponent } from './wrapper/calendar/calendar.component';
import { CommunicationService } from "./services/communication.service";


@NgModule({
  declarations: [
    AppComponent,
    WrapperComponent,
    InputDataComponent,
    CalendarComponent
  ],
  imports: [BrowserModule],
  providers: [CommunicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
