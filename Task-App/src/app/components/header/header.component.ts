import { Component, Input } from '@angular/core';
import {Subscription} from 'rxjs';

import {UiService} from '../../services/ui.service';
import { AppComponent } from '../../app.component';
import { ButtonsComponent } from "../buttons/buttons.component";


@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    imports: [AppComponent, ButtonsComponent]
})
export class HeaderComponent {
 
  @Input() name :string | undefined;

  subscription !: Subscription;
  showAddTask: boolean = false;


  constructor(private uiServices:UiService) {
    this.subscription = this.uiServices.onToggle().subscribe(value => this.showAddTask = value)
  }

  addTaskButton(){
     this.uiServices.toggleShowAddTask();
  }

}
