import { Component, inject } from '@angular/core';
import { PageTitleComponent } from '../../page-title/page-title.component';
import { TaskListComponent } from '../../task-list/task-list.component';
import { HttpService } from '../../../services/http.service';

@Component({
  selector: 'app-completed-task',
  standalone: true,
  imports: [PageTitleComponent,TaskListComponent],
  templateUrl: './completed-task.component.html',
  styleUrl: './completed-task.component.css'
})
export class CompletedTaskComponent {
  newTask="";
  taskList:any[]=[];
  httpService=inject(HttpService);

  ngOnInit(){
    this.getAllTasks();
  }

  getAllTasks(){
    this.httpService.getAllTasks().subscribe((result:any)=>{
      this.taskList=result.filter((x:any)=>x.completed==true);
    })
  }
  onComplete(task:any){
    task.completed=true
    this.httpService.updateTask(task).subscribe(()=>{
      this.getAllTasks();
    })
  }

  onImportant(task:any){
    task.important=true
    this.httpService.updateTask(task).subscribe(()=>{
      this.getAllTasks();
    })
  }
}
