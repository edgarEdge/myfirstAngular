import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LiSeleccionableDirective } from './shared/li-seleccionable.directive';
import { AdminTareasComponent } from './tareas/admin-tareas/admin-tareas.component';
import { ListaTareasComponent } from './tareas/lista-tareas/lista-tareas.component';
import { NuevaTareaComponent } from './tareas/nueva-tarea/nueva-tarea.component';
import { TareasService } from './tareas/services/tareas.service';

@NgModule({
  declarations: [
    AppComponent,
    ListaTareasComponent,
    AdminTareasComponent,
    LiSeleccionableDirective,
    NuevaTareaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TareasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
