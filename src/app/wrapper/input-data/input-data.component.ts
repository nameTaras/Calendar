import { Component, OnInit } from '@angular/core';
import { CommunicationService } from "../../services/communication.service";
import {ICalendar} from "../../interfaces/ICalendar";

@Component({
  selector: 'app-input-data',
  templateUrl: './input-data.component.html',
  styleUrls: ['./input-data.component.css']
})
export class InputDataComponent implements OnInit {

  public toggleCalendar: boolean = true;

  constructor(private communicationService: CommunicationService) {}

  createCalendar(value: ICalendar): void {
    this.communicationService.toggle(this.toggleCalendar);
    this.communicationService.create(value);
  }

  ngOnInit() {}

}
