import {Injectable}  from "@angular/core";
import {Subject} from "rxjs/Subject";
import {ICalendar} from "../interfaces/ICalendar";


@Injectable()
export class CommunicationService {

  toggleCalendar = new Subject<any>();
  dataCreateCalendar = new Subject<any>();

  constructor() {}

  toggle(bool: boolean) {
    this.toggleCalendar.next(bool);
  }

  //Data from input
  create(value: ICalendar){
    this.dataCreateCalendar.next(value);
  }
}
