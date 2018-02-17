import { Component, OnInit } from '@angular/core';
import {CommunicationService} from "../../services/communication.service";
import moment = require("moment");

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  public days: Array<number> = [];
  public toggleCalendar = false;
  public inputYear: string;
  public inputId: any;
  public display: string = 'none';
  public monthModal: string;
  public dayModal: number;
  public daysInMonth: number;
  public firstDayOfMonth: number;
  public numberDay = 0;
  public defineHoverClass: any;

  constructor(private communicationService: CommunicationService)  {
    this.communicationService.subject2.subscribe((value) => {
      this.createCalendar(value.id, value.year, value.month);
    });
    this.communicationService.subject.subscribe( (bool) => {
      this.toggleCalendar = bool;
    });
    for (let i = 0; i <= 41; i++) {
      this.days.push(i);
    }
  }

  createCalendar(id, year, month): void {
    const monthToString: string = year.toString() + month.toString();

    this.monthModal = moment(monthToString, "YYYYMM").format('MMMM');
    this.daysInMonth = 32 - new Date(year, month - 1, 32).getDate();
    this.firstDayOfMonth = new Date(year, month - 1, 0).getDay();
    this.inputYear = year;
    this.inputId = id;
    this.defineHoverClass = (this.firstDayOfMonth == 0)? "hoverClass" : "";
    this.numberDay = 0;
  }

  numbering(day): any {
    if (this.days[day] >= this.firstDayOfMonth && this.numberDay < this.daysInMonth) {
      this.numberDay++;
      console.log(1);
      this.defineHoverClass = "hoverClass";
      return this.numberDay;
    } else {
      this.defineHoverClass = "";
      console.log(0);
    }
  }

  openModal(i){
    this.display = "block";
    this.dayModal = i;
  }

  closeModal(){
    this.display = "none";
  }

  ngOnInit() {
  }

}
