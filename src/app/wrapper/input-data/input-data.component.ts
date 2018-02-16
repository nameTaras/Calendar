import { Component, OnInit } from '@angular/core';
import {CommunicationService} from "../../services/communication.service";

@Component({
  selector: 'app-input-data',
  templateUrl: './input-data.component.html',
  styleUrls: ['./input-data.component.css']
})
export class InputDataComponent implements OnInit {

  public toggleCalendarTransfer: any;

  constructor(private communicationService = CommunicationService) {
    this.communicationService.subject1.subscribe( (value) => {
      this.toggleCalendarTransfer = value;
    });
    console.log(this.toggleCalendarTransfer);
  }

  createCalendar(id, year, month): void {

  }

  ngOnInit() {
  }

}
