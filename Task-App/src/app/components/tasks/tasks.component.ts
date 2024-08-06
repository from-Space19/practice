import { Component, OnInit } from '@angular/core';

import { Task } from "../../task";
import { TaskItemComponent } from "../task-item/task-item.component";
import { TasksService } from '../../services/tasks.service';
import { AddTaskComponent } from "../add-task/add-task.component";

@Component({
    selector: 'app-tasks',
    standalone: true,
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css',
    imports: [TaskItemComponent, AddTaskComponent]
})
export class TasksComponent implements OnInit{

  tasks !: Task[] ;

  constructor(private tasksService : TasksService){ 
   }

  ngOnInit() : void {
    this.tasksService.getTasks().subscribe((tasks) => this.tasks = tasks);
  }

  deleteTask(task : Task){
    this.tasksService.deleteTask(task).subscribe((task) => {
      this.tasks = this.tasks.filter((t) => t.id !== task.id);
    })
  }

  toggleTaskReminder(task:Task){
    task.reminder = !task.reminder;
    this.tasksService.updateTaskReminder(task).subscribe();
    console.log(task.reminder);
  }

  addTask(task:Task){
    this.tasksService.addTask(task).subscribe((task) => {
      this.tasks.push(task);
    })
  }

}
