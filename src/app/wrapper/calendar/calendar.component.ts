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

  public days: Array<number> = [];
  public toggleCalendar = false;
  public inputYear: number;
  public inputId: any;
  public display: string = 'none';
  public monthModal: string;
  public dayModal: number;
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
    for(let i = 0; i <= 41; i++) {
      this.days.push(i);
    }
  }

  createCalendar(calendarInitData: ICalendar) {
    if (calendarInitData.month) {
      const monthToString: string = calendarInitData.year.toString() + calendarInitData.month.toString();
      this.monthModal = moment(monthToString, "YYYYMM").format('MMMM');
    }

    this.daysInMonth = 32 - new Date(calendarInitData.year, calendarInitData.month - 1, 32).getDate();
    this.firstDayOfMonth = new Date(calendarInitData.year, calendarInitData.month - 1, 0).getDay();
    this.inputYear = calendarInitData.year;
    this.inputId = calendarInitData.id;
    this.defineHoverClass = this.firstDayOfMonth === 0;
    this.numberDay = 0;
  }

  counter(day) {
    if (day >= this.firstDayOfMonth && this.numberDay < this.daysInMonth) {
      this.numberDay++;
      this.defineHoverClass = true;
      return this.numberDay;
    } else {
      this.defineHoverClass = false;
    }
  }

  openModal(i){
    this.display = "block";
    this.dayModal =  i.innerText;
    this.createCalendar(this.calendarObject);
  }

  closeModal(){
    this.display = "none";
    this.createCalendar(this.calendarObject);
  }

  ngOnInit() {
  }

}
