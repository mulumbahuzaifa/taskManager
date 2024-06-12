import { Routes } from '@angular/router';
import { AllTaskComponent } from './components/pages/all-task/all-task.component';
import { PendingTaskComponent } from './components/pages/pending-task/pending-task.component';
import { CompletedTaskComponent } from './components/pages/completed-task/completed-task.component';
import { ImportantTasksComponent } from './components/pages/important-tasks/important-tasks.component';

export const routes: Routes = [
  {
    path: '',
    component: AllTaskComponent,
  },
  {
    path: 'pending',
    component: PendingTaskComponent,
  },
  {
    path: 'important',
    component: ImportantTasksComponent,
  },
  {
    path: 'completed',
    component: CompletedTaskComponent,
  }
];
