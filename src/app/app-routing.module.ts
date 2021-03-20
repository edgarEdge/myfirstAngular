import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminTareasComponent } from './tareas/admin-tareas/admin-tareas.component';
import { NuevaTareaComponent } from './tareas/nueva-tarea/nueva-tarea.component';

const routes: Routes = [{
  path: '', component: AdminTareasComponent,
}, {
  path: 'nueva', component: NuevaTareaComponent
}, {
  path: '**', redirectTo: ''
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
