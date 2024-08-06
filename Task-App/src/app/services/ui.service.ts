import { Injectable } from '@angular/core';
import {Subject , Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  subject = new Subject<boolean>();
  showAddTask : boolean = false;

  constructor() { }

  toggleShowAddTask(){
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
  }

  onToggle() : Observable<boolean> {
    return this.subject.asObservable();
  }

}
