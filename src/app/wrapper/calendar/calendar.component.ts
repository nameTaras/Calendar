import { Component, OnInit } from '@angular/core';
import {CommunicationService} from "../../services/communication.service";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  toggleCalendar: boolean = false;

  constructor(private communicationService = CommunicationService) {
    this.communicationService.toggle(this.toggleCalendar);
  }


  ngOnInit() {
  }

}
