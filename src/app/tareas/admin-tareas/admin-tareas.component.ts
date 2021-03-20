import { Component } from '@angular/core';
import { TareasService } from '../services/tareas.service';
import { Tarea } from '../tareas.model';

@Component({
  selector: 'admin-tareas',
  templateUrl: './admin-tareas.component.html',
  styleUrls: ['./admin-tareas.component.css']
})
export class AdminTareasComponent {

  tareas: Tarea[];

  constructor(private tareasService: TareasService) {
    this.initTareas();
  }

  // createTarea(inputTarea: HTMLInputElement) {
  //   const nuevaTarea = inputTarea.value;
  //   console.log('Borrar desde admin-tareas', nuevaTarea);
  //   this.tareasService.crearTarea(nuevaTarea);
  //   inputTarea.value = '';
  //   this.initTareas();
  // }

  borrarTarea(id: number) {
    console.log('Borrar desde admin-tareas', id);
    this.tareasService.borrarTarea(id);
    this.initTareas();
  }

  limpiar() {
    console.log('Limpiar desde admin-tareas');
    this.tareasService.limpiarLista();
    this.initTareas();
  }

  private initTareas() {
    console.log('Inicializar tareas en admin-tareas');
    this.tareas = this.tareasService.obtenerTareas();
  }
}