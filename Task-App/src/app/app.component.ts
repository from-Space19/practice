import { Component, Input, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { ButtonsComponent } from "./components/buttons/buttons.component";
import { TasksComponent } from "./components/tasks/tasks.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, ButtonsComponent, TasksComponent]
})
export class AppComponent {

  title = 'Task Tracker';

}
