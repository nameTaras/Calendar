import {Injectable}  from "@angular/core";
import {Subject} from "rxjs/Subject";

@Injectable()
export class CommunicationService {

  subject = new Subject<any>();
  subject2 = new Subject<any>();

  constructor() {

  }

  toggle(bool: boolean) {
    this.subject.next(bool);
  }

  create(id, year, month){
    this.subject2.next({
      id: id,
      year: year,
      month: month
    });
  }

}
