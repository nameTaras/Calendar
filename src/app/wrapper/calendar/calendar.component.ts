import { Component, OnInit } from '@angular/core';
import {CommunicationService} from "../../services/communication.service";
import * as $ from 'jquery/dist/jquery.min.js';
import moment = require("moment");

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  public toggleCalendarTransferred: boolean = false;
  public inputYear: string;
  public display: string = 'none';
  public monthModal: string;
  public dayModal: number;

  constructor(private communicationService: CommunicationService) {
    this.communicationService.subject2.subscribe((value) => {
      let divide = value.split(" ");
      this.createCalendarTransferred(divide[0], divide[1], divide[2]);
    });
    this.communicationService.subject.subscribe( (bool) => {
      this.toggleCalendarTransferred = bool;
    });
  }


  createCalendarTransferred(id, year, month): void {
    this.inputYear = year;
    const monthToString: string = year.toString() + month.toString();
    this.monthModal = moment(monthToString, "YYYYMM").format('MMMM');
    let numberDay: any = 1;
    const daysInMonth =  32 - new Date(year, month - 1, 32).getDate();
    const firstDayOfMonth = new Date(year, month - 1, 0).getDay();
    for (let toClean = 0; toClean <= 41; toClean++) {
      $("#" + toClean).html("");
    }
    for (let i = firstDayOfMonth; i < daysInMonth + firstDayOfMonth; i++) {
      $("#" + i).html(numberDay).mouseenter(function() {
        $(this).css({"box-shadow": "rgba(0,0,0,0.2) 0px 3px 20px 2px",
                      "transform": "scale(1.2)",
                      "transition-duration": "0.5s"})
      }).mouseout(function() {
        $(this).css({"box-shadow": "rgba(0,0,0,0) 0px 0px 0px 0px",
                     "transform": "scale(1)",
                     "transition-duration": "0.5s"})
      });
      numberDay++;
    }
  }

  openModal(){
    this.display = "block";
  }

  closeModal(){
    this.display = "none";
  }

  ngOnInit() {
  }

}
