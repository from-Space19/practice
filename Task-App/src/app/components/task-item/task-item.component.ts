import { Component, Input,Output,EventEmitter } from '@angular/core';
import { Task } from '../../task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgStyle,NgClass } from '@angular/common';
import { TasksService } from '../../services/tasks.service';


@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [FontAwesomeModule,NgStyle,NgClass],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {

  @Input() task! : Task ;
  @Output() deleteTask : EventEmitter<Task> = new EventEmitter();
  @Output() onDblClick: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;

  constructor(private tasksService : TasksService){ }

  ngOnInit(){

  }

  onDelete(task:Task){
    this.deleteTask.emit(task);
  }

  toggleReminder(task: Task){
    this.onDblClick.emit(task);
  }

}
