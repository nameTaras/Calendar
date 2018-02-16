import {Injectable}  from "@angular/core";
import {Subject} from "rxjs/Subject";

@Injectable()
export class CommunicationService {

  subject1 = new Subject<any>();

  constructor() {

  }

  toggle(bool: any) {
    this.subject1.next(bool);
  }

}
