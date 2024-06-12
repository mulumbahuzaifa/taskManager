import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
@Input() taskList: any[]=[];
@Output() important= new EventEmitter<any[]>();
@Output() complete= new EventEmitter<any[]>();
markImportant(task:any){
this.important.emit(task);
}


markComplete(task:any){
  this.important.emit(task);
}
}
