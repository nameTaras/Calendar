import { Component, OnInit } from '@angular/core';
import {CommunicationService} from "../../services/communication.service";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  toggleCalendarTransfer: boolean;

  constructor(private communicationService: CommunicationService) {
    this.communicationService.subject.subscribe( (bool) => {
      this.toggleCalendarTransfer = bool;
      });
  }

  ngOnInit() {
  }

}
