import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgStyle } from '@angular/common';
@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.css'
})
export class ButtonsComponent {

  @Input() color !:string;
  @Input() text !:string;
  @Output() onButtonEvent = new EventEmitter();
  
  showColor(){
    this.onButtonEvent.emit(this.color + " " + this.text);
    // this.colorEvent.emit(this.text);
  }
  


}
