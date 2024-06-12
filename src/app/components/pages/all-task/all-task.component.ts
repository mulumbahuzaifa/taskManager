import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpService } from '../../../services/http.service';
import { DatePipe } from '@angular/common';
import { PageTitleComponent } from '../../page-title/page-title.component';
import { TaskListComponent } from '../../task-list/task-list.component';

@Component({
  selector: 'app-all-task',
  standalone: true,
  imports: [FormsModule, DatePipe, PageTitleComponent,TaskListComponent],
  templateUrl: './all-task.component.html',
  styleUrl: './all-task.component.css'
})
export class AllTaskComponent {
  newTask="";
  taskList:any[]=[];
  httpService=inject(HttpService);

  ngOnInit(){
    this.getAllTasks();
  }
  addTask(){
    console.log(this.newTask);
    this.httpService.addTask(this.newTask).subscribe(()=>{
      this.newTask="";
    })
  }
  getAllTasks(){
    this.httpService.getAllTasks().subscribe((result:any)=>{
      this.taskList=result;
    })
  }
  onComplete(task:any){
    task.completed=true
    this.httpService.updateTask(task).subscribe(()=>{
    })
  }

  onImportant(task:any){
    task.important=true
    this.httpService.updateTask(task).subscribe(()=>{
    })
  }
}
