import {Injectable}  from "@angular/core";
import {Subject} from "rxjs/Subject";

@Injectable()
export class CommunicationService {

  subject = new Subject<any>();

  constructor() {

  }

  toggle(bool: boolean) {
    this.subject.next(bool);
  }

}
