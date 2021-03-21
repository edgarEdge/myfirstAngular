import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent {

  @Input()
  tareas: string[] = [];

  @Output()
  borrar: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  limpiar: EventEmitter<void> = new EventEmitter<void>();

  private tareaSeleccionada: number;

  constructor() {
    // setTimeout(() => this.tareas=['cambio', 'cambio2'], 2000);
  }

  limpiarLista() {
    console.log('Limpiar lista desde lista-tareas');
    this.limpiar.emit();
  }

  borrarTarea(i: number) {
    console.log('Borrar tarea desde lista-tarea', i);
    this.borrar.emit(i);
  }

  seleccionarTarea(i: number) {
    this.tareaSeleccionada = i;
  }
}