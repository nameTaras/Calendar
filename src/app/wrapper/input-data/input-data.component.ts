import { Component, OnInit } from '@angular/core';
import {CommunicationService} from "../../services/communication.service";

@Component({
  selector: 'app-input-data',
  templateUrl: './input-data.component.html',
  styleUrls: ['./input-data.component.css']
})
export class InputDataComponent implements OnInit {

  public toggleCalendar: boolean = true;

  constructor(private communicationService: CommunicationService) {

  }

  createCalendar(id, year, month): void {
    this.communicationService.toggle(this.toggleCalendar);
  }

  ngOnInit() {
  }

}
