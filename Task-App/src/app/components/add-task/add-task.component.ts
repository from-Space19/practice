import { Component, EventEmitter, Output } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Subscription } from 'rxjs';

import { Task } from '../../task';
import { UiService } from "../../services/ui.service";
@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {

  @Output() onAddTask : EventEmitter<Task> = new EventEmitter();

  task !: string;
  day !: string;
  reminder : boolean = false;
  showAddTask : boolean = false ;
  subscription !: Subscription;

  constructor(private uiService : UiService) {
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value);
  }

  onSubmit(){
    if(!this.task || !this.day){
      alert("Either day or task box in empty!");
      return
    }

    const newTask = {
      type: this.task,
      day: this.day,
      reminder: this.reminder
    }

    this.onAddTask.emit(newTask);

    this.task="";
    this.day="";
    this.reminder=false;

  }

}
