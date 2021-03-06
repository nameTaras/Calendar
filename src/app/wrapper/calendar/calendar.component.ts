import { Component, OnInit } from "@angular/core";
import {CommunicationService} from "../../services/communication.service";
import {ICalendar} from "../../interfaces/ICalendar";
import moment = require("moment");

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  public weeks: Array<number> = [];
  public days: Array<number> = [];
  public toggleCalendar = false;
  public inputYear: number;
  public inputId: any;
  public display: string = 'none';
  public inputMonth: string;
  public choosedDay: number;
  public daysInMonth: number;
  public firstDayOfMonth: number;
  public numberDay = 0;
  public defineHoverClass: boolean;
  public calendarObject: any;

  constructor(private communicationService: CommunicationService)  {
    this.communicationService.dataCreateCalendar.subscribe((value: ICalendar) => {
      this.calendarObject = value;
      this.createCalendar(value);
    });
    this.communicationService.toggleCalendar.subscribe( (bool) => {
      this.toggleCalendar = bool;
    });
    for(let i = 0; i < 6; i++) {
      this.weeks.push(i);
    }
    for(let i = 0; i < 7; i++) {
      this.days.push(i);
    }
  }

  createCalendar(calendarInitData: ICalendar) {
    //Finding month name
    if (calendarInitData.month) {
      const monthToString: string = calendarInitData.year.toString() + calendarInitData.month.toString();
      this.inputMonth = moment(monthToString, "YYYYMM").format('MMMM');
    }
    // Getting how much days in month
    this.daysInMonth = 32 - new Date(calendarInitData.year, calendarInitData.month - 1, 32).getDate();
    // Finding which first day of week has got month
    this.firstDayOfMonth = new Date(calendarInitData.year, calendarInitData.month - 1, 0).getDay();
    this.inputYear = calendarInitData.year;
    this.inputId = calendarInitData.id;
    this.defineHoverClass = this.firstDayOfMonth === 0;
    this.numberDay = 0;
  }

  // Numbering days of month
  counter(day, week) {
    if (day + (7 * week) >= this.firstDayOfMonth && this.numberDay < this.daysInMonth) {
      this.numberDay++;
      (this.numberDay === this.daysInMonth) && (this.defineHoverClass = false);
      return this.numberDay;
    } else {
      (week === 0) && ((day === this.firstDayOfMonth - 1) && (this.defineHoverClass = true));
    }
  }

  // Opening modal window
  openModal(numberOfDay){
    this.display = "block";
    this.choosedDay =  numberOfDay.innerText;
    this.createCalendar(this.calendarObject);
  }

  // closing modal window
  closeModal(){
    this.display = "none";
    this.createCalendar(this.calendarObject);
  }

  ngOnInit() {}
}
